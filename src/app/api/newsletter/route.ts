import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'

const newsletterSchema = z.object({
  email: z.string().email(),
  source: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = newsletterSchema.parse(body)

    // Check if already subscribed
    const existing = await prisma.newsletter.findUnique({
      where: { email: validatedData.email },
    })

    if (existing) {
      if (!existing.isActive) {
        // Reactivate subscription
        await prisma.newsletter.update({
          where: { email: validatedData.email },
          data: { isActive: true },
        })
      }
      
      return NextResponse.json({
        success: true,
        message: 'You are already subscribed to our newsletter',
      })
    }

    // Create new subscription
    await prisma.newsletter.create({
      data: {
        email: validatedData.email,
      },
    })

    // Also create as a lead
    await prisma.lead.create({
      data: {
        email: validatedData.email,
        name: 'Newsletter Subscriber',
        source: 'NEWSLETTER',
        message: `Subscribed from: ${validatedData.source || 'website'}`,
      },
    })

    // In production, send confirmation email
    
    console.log('Newsletter subscription saved:', validatedData.email)

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }

    console.error('Newsletter error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
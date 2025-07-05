import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(20),
  source: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
      },
    })

    // Also create a lead record
    await prisma.lead.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        phone: validatedData.phone,
        source: 'CONTACT_FORM',
        message: `Subject: ${validatedData.subject}\n\n${validatedData.message}`,
      },
    })

    // Send email notification
    if (process.env.RESEND_API_KEY) {
      const { sendLeadNotification } = await import('@/lib/email')
      await sendLeadNotification({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        source: 'Contact Form',
        message: validatedData.message,
      })
    }
    
    console.log('Contact form submission saved:', submission.id)

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you within 24 hours.',
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Something went wrong' },
      { status: 500 }
    )
  }
}
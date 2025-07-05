import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'

const assessmentSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  title: z.string().min(2),
  phone: z.string().optional(),
  products: z.string().min(10),
  experience: z.enum(['none', 'exploring', 'active', 'established']),
  timeline: z.enum(['immediate', '3months', '6months', '12months', 'exploring']),
  budget: z.enum(['under50k', '50k-250k', '250k-1m', 'over1m', 'undecided']),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = assessmentSchema.parse(body)

    // Create detailed lead record
    const lead = await prisma.lead.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        title: validatedData.title,
        phone: validatedData.phone,
        source: 'ASSESSMENT',
        status: 'NEW',
        message: JSON.stringify({
          products: validatedData.products,
          experience: validatedData.experience,
          timeline: validatedData.timeline,
          budget: validatedData.budget,
        }),
      },
    })

    // In production:
    // 1. Send notification to sales team
    // 2. Trigger automated email sequence
    // 3. Generate assessment report
    
    console.log('Assessment submission saved:', lead.id)

    return NextResponse.json({
      success: true,
      message: 'Assessment received. Our team will prepare your customized report.',
      leadId: lead.id,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }

    console.error('Assessment error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit assessment' },
      { status: 500 }
    )
  }
}
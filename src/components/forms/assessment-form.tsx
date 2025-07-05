'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { FileText, CheckCircle } from 'lucide-react'

const assessmentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().min(2, 'Company name is required'),
  title: z.string().min(2, 'Job title is required'),
  phone: z.string().optional(),
  products: z.string().min(10, 'Please describe your products/services'),
  experience: z.enum(['none', 'exploring', 'active', 'established']),
  timeline: z.enum(['immediate', '3months', '6months', '12months', 'exploring']),
  budget: z.enum(['under50k', '50k-250k', '250k-1m', 'over1m', 'undecided']),
})

type AssessmentFormData = z.infer<typeof assessmentSchema>

export function AssessmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentSchema),
  })

  const onSubmit = async (data: AssessmentFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setIsSuccess(true)
      reset()
    } catch (error) {
      console.error('Assessment submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <CheckCircle className="w-16 h-16 text-secure-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Assessment Submitted!</h3>
          <p className="text-trust-slate mb-6">
            Our experts will review your information and prepare a customized market 
            entry strategy. We'll contact you within 48 hours.
          </p>
          <Button onClick={() => setIsSuccess(false)}>
            Submit Another Assessment
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-strategic-blue/10 rounded-lg">
            <FileText className="w-6 h-6 text-strategic-blue" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Free Market Assessment</h3>
            <p className="text-trust-slate">
              Get a customized Bangladesh defense market entry strategy
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company *
                </label>
                <input
                  {...register('company')}
                  id="company"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Job Title *
                </label>
                <input
                  {...register('title')}
                  id="title"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone (Optional)
                </label>
                <input
                  {...register('phone')}
                  id="phone"
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                />
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div>
            <h4 className="font-semibold mb-4">Business Information</h4>
            <div className="space-y-4">
              <div>
                <label htmlFor="products" className="block text-sm font-medium mb-1">
                  Products/Services *
                </label>
                <textarea
                  {...register('products')}
                  id="products"
                  rows={3}
                  placeholder="Describe your defense products or services"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                />
                {errors.products && (
                  <p className="mt-1 text-sm text-red-600">{errors.products.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-1">
                  International Defense Experience *
                </label>
                <select
                  {...register('experience')}
                  id="experience"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                >
                  <option value="">Select experience level</option>
                  <option value="none">No international experience</option>
                  <option value="exploring">Exploring international markets</option>
                  <option value="active">Active in other markets</option>
                  <option value="established">Established global supplier</option>
                </select>
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-1">
                    Entry Timeline *
                  </label>
                  <select
                    {...register('timeline')}
                    id="timeline"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (0-3 months)</option>
                    <option value="3months">3-6 months</option>
                    <option value="6months">6-12 months</option>
                    <option value="12months">12+ months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                  {errors.timeline && (
                    <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-1">
                    Annual Budget Range *
                  </label>
                  <select
                    {...register('budget')}
                    id="budget"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
                  >
                    <option value="">Select budget range</option>
                    <option value="under50k">Under $50,000</option>
                    <option value="50k-250k">$50,000 - $250,000</option>
                    <option value="250k-1m">$250,000 - $1M</option>
                    <option value="over1m">Over $1M</option>
                    <option value="undecided">Undecided</option>
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Get Free Assessment'}
          </Button>

          <p className="text-xs text-center text-trust-slate">
            Your information is confidential and will only be used to prepare your 
            market assessment. No spam, guaranteed.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
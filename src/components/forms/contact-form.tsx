'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { CheckCircle, AlertCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  source?: string
  onSuccess?: () => void
}

export function ContactForm({ source = 'website', onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setSubmitStatus('success')
      reset()
      onSuccess?.()
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl font-bold">Get in Touch</h3>
        <p className="text-trust-slate">
          Let's discuss how we can help you succeed in the Bangladesh defense market
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name *
              </label>
              <input
                {...register('name')}
                id="name"
                type="text"
                className="w-full px-3 py-2 input-enhanced rounded-md"
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
                className="w-full px-3 py-2 input-enhanced rounded-md"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-1">
                Company
              </label>
              <input
                {...register('company')}
                id="company"
                type="text"
                className="w-full px-3 py-2 input-enhanced rounded-md"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone
              </label>
              <input
                {...register('phone')}
                id="phone"
                type="tel"
                className="w-full px-3 py-2 input-enhanced rounded-md"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject *
            </label>
            <input
              {...register('subject')}
              id="subject"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message *
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={4}
              className="w-full px-3 py-2 input-enhanced rounded-md resize-none"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 p-4 bg-green-50 text-green-800 rounded-md">
              <CheckCircle className="w-5 h-5" />
              <span>Thank you! We'll be in touch within 24 hours.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 p-4 bg-red-50 text-red-800 rounded-md">
              <AlertCircle className="w-5 h-5" />
              <span>Something went wrong. Please try again later.</span>
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          <p className="text-xs text-center text-trust-slate">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
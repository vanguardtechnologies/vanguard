'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Mail, CheckCircle } from 'lucide-react'

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email'),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

interface NewsletterFormProps {
  variant?: 'default' | 'compact'
  source?: string
}

export function NewsletterForm({ variant = 'default', source = 'website' }: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      })

      if (!response.ok) throw new Error('Failed to subscribe')

      setIsSuccess(true)
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Newsletter subscription error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <div className="flex-1">
          <input
            {...register('email')}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 input-enhanced rounded-md"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting || isSuccess}>
          {isSuccess ? <CheckCircle className="w-4 h-4" /> : 'Subscribe'}
        </Button>
      </form>
    )
  }

  return (
    <div className="bg-gradient-surface rounded-lg p-8 card-elevated">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-strategic-blue/10 to-sky-accent/10 rounded-lg">
          <Mail className="w-6 h-6 text-strategic-blue" />
        </div>
        <div>
          <h3 className="text-lg font-bold">Defense Market Intelligence</h3>
          <p className="text-sm text-trust-slate">
            Weekly insights on Bangladesh defense opportunities
          </p>
        </div>
      </div>

      {isSuccess ? (
        <div className="flex items-center gap-2 p-4 bg-green-50 text-green-800 rounded-md">
          <CheckCircle className="w-5 h-5" />
          <span>Success! Check your email to confirm subscription.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register('email')}
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 input-enhanced rounded-md"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
          </Button>

          <p className="text-xs text-center text-trust-slate">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </form>
      )}
    </div>
  )
}
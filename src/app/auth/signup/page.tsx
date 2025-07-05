'use client'

import { useState } from 'react'
// import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function SignUpPage() {
  // const router = useRouter() // TODO: Implement signup redirect
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    // const formData = new FormData(event.currentTarget)
    // const email = formData.get('email') as string
    // const password = formData.get('password') as string
    // const name = formData.get('name') as string
    // const company = formData.get('company') as string

    try {
      // In a real app, this would create a user in the database
      // For now, we'll just redirect to sign in
      setError('Sign up is currently disabled. Please use the demo account.')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="flex justify-center mb-4">
          <Image
            src="/vanguard-logo-black.png"
            alt="Vanguard Technology"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </div>
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        <p className="text-sm text-trust-slate text-center">
          Enter your information to get started
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Acme Defense Corp"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              minLength={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-strategic-blue"
            />
            <p className="text-xs text-trust-slate">
              Must be at least 6 characters
            </p>
          </div>
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
              {error}
            </div>
          )}
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          <span className="text-trust-slate">Already have an account? </span>
          <Link
            href="/auth/signin"
            className="font-medium text-strategic-blue hover:underline"
          >
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
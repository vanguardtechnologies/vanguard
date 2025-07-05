import Link from 'next/link'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AuthErrorPage() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <h2 className="text-2xl font-bold text-center text-alert-amber">
          Authentication Error
        </h2>
        <p className="text-sm text-trust-slate text-center">
          There was a problem signing you in
        </p>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="text-sm text-trust-slate">
          This could be due to an incorrect email or password, or your account
          may not have the necessary permissions.
        </p>
        <Button asChild className="w-full">
          <Link href="/auth/signin">Try Again</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
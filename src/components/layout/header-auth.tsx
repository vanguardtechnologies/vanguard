import { auth, signOut } from '@/lib/auth'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export async function HeaderAuth() {
  const session = await auth()

  return (
    <div className="flex items-center gap-4">
      {session ? (
        <>
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              Dashboard
            </Button>
          </Link>
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
          >
            <Button variant="outline" size="sm" type="submit">
              Sign Out
            </Button>
          </form>
        </>
      ) : (
        <>
          <Link href="/auth/signin">
            <Button variant="ghost" size="sm">
              Partner Portal
            </Button>
          </Link>
          <Link href="/auth/signin">
            <Button size="sm">
              Get Started
            </Button>
          </Link>
        </>
      )}
    </div>
  )
}
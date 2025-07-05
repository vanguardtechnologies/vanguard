import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { authConfig } from './auth.config'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'

async function getUser(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    })
    return user
  } catch {
    return null
  }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await getUser(email)
          
          if (!user || !user.password) return null
          
          const passwordsMatch = await bcrypt.compare(password, user.password)
          
          if (passwordsMatch) {
            const { password: _password, ...userWithoutPassword } = user
            return userWithoutPassword
          }
        }

        console.log('Invalid credentials')
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id!
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },
})
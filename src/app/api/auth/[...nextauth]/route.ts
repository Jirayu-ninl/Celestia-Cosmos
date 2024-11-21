import type { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import { authOptions } from '@backend/auth'

const handler = NextAuth(authOptions as AuthOptions)
export { handler as GET, handler as POST }

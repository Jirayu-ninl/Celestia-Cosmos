/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AuthOptions, DefaultSession, DefaultUser } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { getServerSession } from 'next-auth'
import { headers } from 'next/headers'

import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from 'next-auth/providers/github'
// import DiscordProvider from 'next-auth/providers/discord'
import { env } from '@env'
import { prisma } from '../database'
import { TIME } from '@/utils/time'

declare module 'next-auth' {
  interface User extends DefaultUser {
    id: string
    username: string
    role: 'USER' | 'ADMIN' | 'SUPER_ADMIN'
    plan: 'FREE' | 'PLUS' | 'PRO' | 'ELITE'
    balance: number
    metadata: any
  }

  interface Session extends DefaultSession {
    user: {
      id: string
      username: string
      name: string
      role: 'USER' | 'ADMIN' | 'SUPER_ADMIN'
      plan: 'FREE' | 'PLUS' | 'PRO' | 'ELITE'
      balance: number
      metadata: any
    } & DefaultSession['user']
  }
}

// const useSecureCookies = env.NEXTAUTH_URL.startsWith('https://')
// const cookiePrefix = useSecureCookies ? '__Secure-' : ''
// const hostName = new URL(env.NEXTAUTH_URL).hostname

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/profile',
    signOut: '/portal',
    error: '/portal',
    newUser: '/profile/settings?step=start',
  },
  // cookies: {
  //   sessionToken: {
  //     name: `${cookiePrefix}next-auth.session-token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: 'lax',
  //       path: '/',
  //       domain: '.' + hostName,
  //       secure: useSecureCookies,
  //     },
  //   },
  // },
  callbacks: {
    signIn: async ({ user, profile }) => {
      if (!profile || !profile.email) {
        console.error('Error updating user: no profile email')
        return false
      }
      user.username = profile.email.split('@')[0]
      if (!profile.name) user.name = profile.email.split('@')[0]
      return true
    },
    session: ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          name: user.name,
          username: user.username,
          role: user.role,
          plan: user.plan,
          balance: user.balance,
          metadata: user.metadata,
        },
      }
    },
    // signIn: async ({ user, account }) => SignInProvider(user, account),
  },
  events: {
    signIn: async ({ user }) => {
      const activeSession = await prisma.session.findFirst({
        where: {
          userId: user.id,
        },
        orderBy: {
          expires: 'desc',
        },
      })
      if (activeSession) {
        const headersList = headers()
        const ip = (headersList.get('x-forwarded-for') ?? '').split(',')[0]
        const userAgent = headersList.get('user-agent') || 'Unknown user-agent'

        await prisma.session.update({
          where: { id: activeSession.id },
          data: {
            ipAddress: ip,
            userAgent: userAgent,
          },
        })
      }
    },
  },
  adapter: PrismaAdapter(prisma) as AuthOptions['adapter'],
  session: {
    strategy: 'database',
    maxAge: TIME.MONTH,
  },
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.AUTH_GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: env.AUTH_FB_APP_ID,
      clientSecret: env.AUTH_FB_APP_SECRET,
    }),
    GithubProvider({
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    }),
    // DiscordProvider({
    //   clientId: env.AUTH_DISCORD_CLIENT_ID,
    //   clientSecret: env.AUTH_DISCORD_CLIENT_SECRET,
    // }),
  ],
  secret: env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}

export const getSession = async () => await getServerSession(authOptions)

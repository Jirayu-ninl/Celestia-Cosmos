import type { PrismaClient } from '@prisma/client'
import type { Session } from 'next-auth'

import { createMiddleware } from 'hono/factory'
import { getServerSession } from 'next-auth'

import { authOptions } from '@backend/auth'
import { prisma } from '@backend/database'
import { s3 } from '@core/storage'

export type Env = {
  Variables: {
    prisma: PrismaClient
    s3: typeof s3
    session: Session | null
  }
}

export const withContext = createMiddleware<Env>(async (c, next) => {
  const session = await getServerSession(authOptions)
  c.set('prisma', prisma)
  c.set('s3', s3)
  c.set('session', session)

  await next()
})

export const withAuth = createMiddleware<{
  Variables: {
    session: Session | null
  }
}>(async (c, next) => {
  const session = await getServerSession(authOptions)
  if (!session) {
    new Response('Unauthorized', { status: 401 })
  }
  c.set('session', session)
  await next()
})

export const withAdmin = createMiddleware<{
  Variables: {
    session: Session | null
  }
}>(async (c, next) => {
  const session = await getServerSession(authOptions)
  if (!session || session.user?.role !== 'ADMIN') {
    new Response('Unauthorized', { status: 401 })
  }
  c.set('session', session)
  await next()
})

export const withSuperAdmin = createMiddleware<{
  Variables: {
    session: Session | null
  }
}>(async (c, next) => {
  const session = await getServerSession(authOptions)
  if (!session || session.user?.role !== 'SUPER_ADMIN') {
    new Response('Unauthorized', { status: 401 })
  }
  c.set('session', session)
  await next()
})

import type { MiddlewareRouteConfig } from 'types'
import type { UserRole } from '@prisma/client'
import { TIME } from '@/utils/time'

const config = {
  matcher: [
    '/app/:path*',
    '/dashboard/:path*',
    '/settings/:path*',
    '/admin/:path*',
    '/api/:path*',
  ],
}

const protectedRoutes: MiddlewareRouteConfig[] = [
  {
    path: '/app',
    roles: ['USER', 'ADMIN', 'SUPER_ADMIN'] as UserRole[],
    rateLimit: {
      requests: 100, // Allow 100 requests
      window: TIME.MINUTE, // per 60 seconds (1 minute)
    },
  },
  {
    path: '/dashboard',
    roles: ['USER', 'ADMIN', 'SUPER_ADMIN'] as UserRole[],
    rateLimit: { requests: 50, window: TIME.MINUTE },
  },
  {
    path: '/admin',
    roles: ['ADMIN', 'SUPER_ADMIN'] as UserRole[],
    rateLimit: {
      requests: 100,
      window: TIME.MINUTE,
    },
  },
  {
    path: '/settings',
    roles: ['USER', 'ADMIN', 'SUPER_ADMIN'] as UserRole[],
    rateLimit: {
      requests: 200,
      window: TIME.HOUR,
    },
  },
]

export { config, protectedRoutes }

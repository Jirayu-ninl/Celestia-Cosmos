import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@backend/auth'

const authPaths = ['/app', '/dashboard', '/settings']

export async function middleware(req: NextRequest) {
  const session = await getServerSession(authOptions)
  const pathName = req.nextUrl.pathname
  const isProtected = authPaths.some((path) => pathName.startsWith(path))

  if (isProtected && !session) {
    const loginUrl = new URL('/portal', req.url)
    return NextResponse.redirect(loginUrl)
  }

  // Allow the request to continue
  return NextResponse.next()
}

export const config = {
  matcher: ['/app/:path*', '/dashboard/:path*', '/settings/:path*'],
}

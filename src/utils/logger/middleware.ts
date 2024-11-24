import type { NextRequest } from 'next/server'
import { SentryLogger } from './implement'

class MiddlewareLogger extends SentryLogger {
  public request(request: NextRequest): void {
    if (this.isDevelopment) {
      this.debug('Incoming request', {
        method: request.method,
        path: request.nextUrl.pathname,
        userAgent: request.headers.get('user-agent'),
        ip: request.ip,
      })
    }
  }
}

export const middlewareLogger = MiddlewareLogger.getInstance()

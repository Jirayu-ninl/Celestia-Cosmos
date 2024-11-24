import * as Sentry from '@sentry/nextjs'
import { app as appConfig } from '@config'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  release: appConfig.VERSION,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1,
  // debug: process.env.NODE_ENV === 'development',
})

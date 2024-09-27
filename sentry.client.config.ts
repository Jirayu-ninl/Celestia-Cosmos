import * as Sentry from '@sentry/nextjs'
import config from '@config'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_APP_COSMOS_SENTRY_DSN,
  release: config.app.VERSION,
  environment: process.env.NODE_ENV,
  integrations: [Sentry.replayIntegration()],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: process.env.NODE_ENV === 'development',
})

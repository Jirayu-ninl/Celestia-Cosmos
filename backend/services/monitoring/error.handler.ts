import { env } from '@env'
import { serverLog } from '@nexel/nextjs/libs/log/log.server'
import { captureToSentry } from '@nexel/nextjs/libs/log/sentry.capture'

const ErrorHandler = (e: any) => {
  captureToSentry(e, 'error')
  const log = serverLog()
  let message: string = 'Database connection failed'
  if (
    typeof e === 'object' &&
    e &&
    'message' in e &&
    typeof e.message === 'string'
  ) {
    if (env.NODE_ENV !== 'production') console.log(e)
    message = e.message
  }
  log.error(message)
}

export { ErrorHandler }

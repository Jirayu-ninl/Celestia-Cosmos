import type { LogLevel, LogData } from '../types'
import {
  captureException,
  captureMessage,
  setContext,
  setUser,
  setTag,
} from '@sentry/nextjs'
import { BaseLogger } from './base'

export class SentryLogger extends BaseLogger {
  private static instance: SentryLogger

  protected constructor() {
    super()
  }

  public static getInstance(): SentryLogger {
    if (!SentryLogger.instance) {
      SentryLogger.instance = new SentryLogger()
    }

    return SentryLogger.instance
  }

  protected logToSystem(
    level: LogLevel,
    message: string,
    data?: LogData,
  ): void {
    if (this.isDevelopment) {
      switch (level) {
        case 'debug':
        case 'info':
          console.log(data)
          break
        case 'warn':
          console.warn(data)
          break
        case 'error':
          console.error(data)
          break
      }
    }

    if (!this.isDevelopment && level === 'error') {
      if (data?.error instanceof Error) {
        captureException(data.error, {
          extra: data,
        })
      } else {
        captureMessage(message, {
          level: 'error',
          extra: data,
        })
      }
    }
  }

  protected configureSentry(error: Error, extra?: LogData): void {
    setTag('location', 'middleware')
    setTag('errorType', error.name)

    if (extra?.userId) {
      setUser({ id: extra.userId })
    }
    if (extra) {
      setContext('additional', extra)
    }

    captureException(error)
  }
}

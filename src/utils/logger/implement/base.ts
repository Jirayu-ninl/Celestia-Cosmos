import type { LogLevel, LogData, ILogger } from '../types'

export abstract class BaseLogger implements ILogger {
  protected isDevelopment = process.env.NODE_ENV === 'development'

  protected abstract logToSystem(
    level: LogLevel,
    message: string,
    data?: LogData,
  ): void

  protected log(level: LogLevel, message: string, data?: LogData) {
    if (!this.isDevelopment && level === 'debug') return

    const timestamp = new Date().toISOString()
    const logData = {
      timestamp,
      level,
      message,
      ...(data && { data }),
    }

    this.logToSystem(level, message, logData)
  }

  public debug(message: string, data?: LogData): void {
    this.log('debug', message, data)
  }

  public info(message: string, data?: LogData): void {
    this.log('info', message, data)
  }

  public warn(message: string, data?: LogData): void {
    this.log('warn', message, data)
  }

  public error(message: string, error: Error | unknown, extra?: LogData): void {
    if (error instanceof Error) {
      if (!this.isDevelopment) {
        this.configureSentry(error, extra)
      }

      this.log('error', message, {
        error,
        ...extra,
        stack: error.stack,
      })
    } else {
      this.log('error', message, {
        error: String(error),
        ...extra,
      })
    }
  }

  protected abstract configureSentry(error: Error, extra?: LogData): void
}

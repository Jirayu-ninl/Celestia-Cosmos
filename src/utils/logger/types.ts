// import type { NextRequest } from 'next/server'

export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

export type LogData = Record<string, any>

export interface ILogger {
  debug(message: string, data?: LogData): void
  info(message: string, data?: LogData): void
  warn(message: string, data?: LogData): void
  error(message: string, error: Error | unknown, extra?: LogData): void
}

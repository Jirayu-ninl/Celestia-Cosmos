import { Context } from 'hono'

export class CacheController {
  static async purgeCache(c: Context) {
    return c.text('PURGE Method /cache')
  }
}

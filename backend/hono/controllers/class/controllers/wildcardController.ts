import { Context } from 'hono'

export class WildcardController {
  static async getWildcard(c: Context) {
    return c.text('GET /wild/*/card')
  }
}

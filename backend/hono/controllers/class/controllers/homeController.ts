import { Context } from 'hono'

export class HomeController {
  static async getRoot(c: Context) {
    return c.text('GET /')
  }

  static async postRoot(c: Context) {
    return c.text('POST /')
  }

  static async putRoot(c: Context) {
    return c.text('PUT /')
  }

  static async deleteRoot(c: Context) {
    return c.text('DELETE /')
  }
}

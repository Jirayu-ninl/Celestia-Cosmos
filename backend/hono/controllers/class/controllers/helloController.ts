import { Context } from 'hono'
import { HelloService } from '../services/helloService'

export class HelloController {
  private helloService: HelloService

  constructor() {
    this.helloService = new HelloService()
  }

  async getHello(c: Context) {
    const message = this.helloService.getHelloMessage()
    return c.json({ message })
  }

  async anyMethodHello(c: Context) {
    return c.text('Any Method /hello')
  }

  async multiLanguageHello(c: Context) {
    return c.text('Hello')
  }
}

import { Hono } from 'hono'
import { HelloController } from '../controllers/helloController'
import { HomeController } from '../controllers/homeController'
import { WildcardController } from '../controllers/wildcardController'
import { CacheController } from '../controllers/cacheController'

export const createRouter = () => {
  const app = new Hono().basePath('/api')
  const helloController = new HelloController()
  app.get('/', HomeController.getRoot)
  app.post('/', HomeController.postRoot)
  app.put('/', HomeController.putRoot)
  app.delete('/', HomeController.deleteRoot)
  app.get('/hello', (c) => helloController.getHello(c))
  app.all('/hello', (c) => helloController.anyMethodHello(c))
  app.on('GET', ['/hello', '/ja/hello', '/en/hello'], (c) =>
    helloController.multiLanguageHello(c),
  )
  app.get('/wild/*/card', WildcardController.getWildcard)
  app.on('PURGE', '/cache', CacheController.purgeCache)
  app.on(['PUT', 'DELETE'], '/post', (c) => c.text('PUT or DELETE /post'))

  return app
}

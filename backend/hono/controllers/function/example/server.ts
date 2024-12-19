import { Hono } from 'hono'
import { authRoutes } from './auth'

const app = new Hono().basePath('/api')

const routes = app.route('/auth', authRoutes)

export default app
export type AppType = typeof routes

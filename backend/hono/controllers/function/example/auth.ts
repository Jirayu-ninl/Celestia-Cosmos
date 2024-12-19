import { z } from 'zod'
import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'

const authRoutes = new Hono()
authRoutes.post(
  '/login',
  zValidator('json', z.object({ name: z.string() })),
  (c) => {
    return c.json({ success: 'ok' })
  },
)

export { authRoutes }
   
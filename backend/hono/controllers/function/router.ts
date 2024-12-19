// src/server/hono/router.ts
import type { Context } from 'hono'
import { Hono } from 'hono'
import { z } from 'zod'
import { withContext } from './middleware'
import { createPublicProcedure, createProtectedProcedure } from './procedure'
import { METHOD } from './enums'

type RouterInput = {
  path: string
  schema?: z.ZodType<any>
  handler: (c: Context) => Promise<any>
  protected?: boolean
}

export const createRouter = () => {
  const app = new Hono()
  app.use('*', withContext)

  const publicProcedure = createPublicProcedure(app)
  const protectedProcedure = createProtectedProcedure(app)

  return {
    [METHOD.GET]: app[METHOD.GET],
    [METHOD.POST]: app[METHOD.POST],
    [METHOD.PUT]: app[METHOD.PUT],
    [METHOD.DELETE]: app[METHOD.DELETE],
    [METHOD.PATCH]: app[METHOD.PATCH],
    procedure: { publicProcedure, protectedProcedure },
  }
}

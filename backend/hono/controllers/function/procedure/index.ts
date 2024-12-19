import type { Context, Hono } from 'hono'
import type { BlankEnv, BlankSchema } from 'hono/types'
import { z } from 'zod'
import { withAuth } from '../middleware'
import { METHOD } from '../enums'

// type RouterInput = {
//   path: string
//   schema?: z.ZodType<any>
//   handler: (c: Context) => Promise<any>
//   protected?: boolean
// }

export const createPublicProcedure = (
  app: Hono<BlankEnv, BlankSchema, '/'>,
) => {
  const handler = (path: string, method: METHOD | `${METHOD}`) => {
    return {
      input: (schema: z.ZodType<any>) => {
        return {
          service: (service: (c: Context) => void | Promise<void>) =>
            app[method](path, withAuth, async (c) => {
              if (schema) {
                const body = await c.req.json()
                const parsed = schema.safeParse(body)
                if (!parsed.success) {
                  return c.json({ error: parsed.error }, 400)
                }
                c.set('input' as never, parsed.data as never)
              }
              service(c)
            }),
        }
      },
    }
  }

  return {
    [METHOD.GET]: (path: string) => handler(path, METHOD.GET),
    [METHOD.POST]: (path: string) => handler(path, METHOD.POST),
    [METHOD.PUT]: (path: string) => handler(path, METHOD.PUT),
    [METHOD.DELETE]: (path: string) => handler(path, METHOD.DELETE),
    [METHOD.PATCH]: (path: string) => handler(path, METHOD.PATCH),
  }
}

export const createProtectedProcedure = (
  app: Hono<BlankEnv, BlankSchema, '/'>,
) => {
  const handler = (path: string, method: METHOD | `${METHOD}`) => {
    return {
      input: (schema: z.ZodType<any>) => {
        return {
          service: (service: (c: Context) => void | Promise<void>) =>
            app[method](path, async (c) => {
              if (schema) {
                const body = await c.req.json()
                const parsed = schema.safeParse(body)
                if (!parsed.success) {
                  return c.json({ error: parsed.error }, 400)
                }
                c.set('input' as never, parsed.data)
              }
              service(c)
            }),
        }
      },
    }
  }

  return {
    [METHOD.GET]: (path: string) => handler(path, METHOD.GET),
    [METHOD.POST]: (path: string) => handler(path, METHOD.POST),
    [METHOD.PUT]: (path: string) => handler(path, METHOD.PUT),
    [METHOD.DELETE]: (path: string) => handler(path, METHOD.DELETE),
    [METHOD.PATCH]: (path: string) => handler(path, METHOD.PATCH),
  }
}

// export const createPublicProcedure =
//   (app: Hono<BlankEnv, BlankSchema, '/'>) =>
//   ({ path, schema, handler }: RouterInput) => {
//     app.post(path, async (c) => {
//       if (schema) {
//         const body = await c.req.json()
//         const parsed = schema.safeParse(body)
//         if (!parsed.success) {
//           return c.json({ error: parsed.error }, 400)
//         }
//         c.set('input' as never, parsed.data)
//       }
//       return handler(c)
//     })
//   }

// export const createProtectedProcedure =
//   (app: Hono<BlankEnv, BlankSchema, '/'>) =>
//   ({ path, schema, handler }: RouterInput) => {
//     app.post(path, withAuth, async (c) => {
//       if (schema) {
//         const body = await c.req.json()
//         const parsed = schema.safeParse(body)
//         if (!parsed.success) {
//           return c.json({ error: parsed.error }, 400)
//         }
//         c.set('input' as never, parsed.data as never)
//       }
//       return handler(c)
//     })
//   }

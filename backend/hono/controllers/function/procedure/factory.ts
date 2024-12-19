import type { Context, Hono, MiddlewareHandler } from 'hono'
import type { BlankEnv, BlankSchema } from 'hono/types'
import { z } from 'zod'
import { withAuth, withAdmin, withSuperAdmin } from '../middleware'
import { METHOD } from '../enums'
import { StatusCode } from 'hono/utils/http-status'

// Custom error class for API errors
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public details?: unknown,
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

// Available middleware types
export enum MiddlewareType {
  NONE = 'none',
  AUTH = 'auth',
  ADMIN = 'admin',
  SUPER_ADMIN = 'superAdmin',
}

// Configuration for procedures
interface ProcedureConfig {
  middleware: MiddlewareType[]
  validateBody?: boolean
}

// Type for the procedure handler
type ProcedureHandler<T> = (c: Context & { input?: T }) => Promise<void> | void

// Type for HTTP methods
type HttpMethod = METHOD | `${METHOD}`

// Middleware map
const middlewareMap: Record<MiddlewareType, MiddlewareHandler[]> = {
  [MiddlewareType.NONE]: [],
  [MiddlewareType.AUTH]: [withAuth],
  [MiddlewareType.ADMIN]: [withAdmin],
  [MiddlewareType.SUPER_ADMIN]: [withSuperAdmin],
}

// Factory function to create procedure builders
function createProcedureBuilder(
  app: Hono<BlankEnv, BlankSchema, '/'>,
  config: ProcedureConfig,
) {
  const createHandler = <T>(
    path: string,
    method: HttpMethod,
    schema?: z.ZodType<T>,
  ) => ({
    service: (handler: ProcedureHandler<T>) => {
      const middleware = config.middleware
        .flatMap((type) => middlewareMap[type])
        .filter(Boolean)

      return app[method](path, ...middleware, async (c: Context) => {
        try {
          let input: T | undefined

          if (schema && config.validateBody) {
            const body = await c.req.json()
            const result = schema.safeParse(body)

            if (!result.success) {
              throw new ApiError(400, 'Invalid input', result.error.flatten())
            }

            input = result.data
          }

          return handler(Object.assign(c, { input }))
        } catch (error) {
          if (error instanceof ApiError) {
            return c.json(
              {
                error: error.message,
                details: error.details,
              },
              (error?.statusCode as StatusCode) || 403,
            )
          }

          console.error('Unexpected error:', error)
          return c.json({ error: 'Internal server error' }, 500)
        }
      })
    },
  })

  const methodHandler = (path: string, method: HttpMethod) => ({
    input: <T>(schema: z.ZodType<T>) => createHandler<T>(path, method, schema),
    noInput: () => createHandler(path, method),
  })

  return {
    [METHOD.GET]: (path: string) => methodHandler(path, METHOD.GET),
    [METHOD.POST]: (path: string) => methodHandler(path, METHOD.POST),
    [METHOD.PUT]: (path: string) => methodHandler(path, METHOD.PUT),
    [METHOD.DELETE]: (path: string) => methodHandler(path, METHOD.DELETE),
    [METHOD.PATCH]: (path: string) => methodHandler(path, METHOD.PATCH),
  }
}

// Create procedure builders for different access levels
export const createPublicProcedure = (app: Hono<BlankEnv, BlankSchema, '/'>) =>
  createProcedureBuilder(app, {
    middleware: [MiddlewareType.NONE],
    validateBody: true,
  })

export const createAuthProcedure = (app: Hono<BlankEnv, BlankSchema, '/'>) =>
  createProcedureBuilder(app, {
    middleware: [MiddlewareType.AUTH],
    validateBody: true,
  })

export const createAdminProcedure = (app: Hono<BlankEnv, BlankSchema, '/'>) =>
  createProcedureBuilder(app, {
    middleware: [MiddlewareType.ADMIN],
    validateBody: true,
  })

export const createSuperAdminProcedure = (
  app: Hono<BlankEnv, BlankSchema, '/'>,
) =>
  createProcedureBuilder(app, {
    middleware: [MiddlewareType.SUPER_ADMIN],
    validateBody: true,
  })

// Create a custom procedure with specific middleware
export const createCustomProcedure = (
  app: Hono<BlankEnv, BlankSchema, '/'>,
  middleware: MiddlewareType[],
) =>
  createProcedureBuilder(app, {
    middleware,
    validateBody: true,
  })

// Usage example:
/*
// Initialize procedures
const publicProcedure = createPublicProcedure(app)
const authProcedure = createAuthProcedure(app)
const adminProcedure = createAdminProcedure(app)
const superAdminProcedure = createSuperAdminProcedure(app)

// Custom procedure with specific middleware
const customProcedure = createCustomProcedure(app, [
  MiddlewareType.AUTH,
  MiddlewareType.ADMIN
])

// Schema example
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
})

// Public endpoint
publicProcedure.GET('/health')
  .noInput()
  .service(async (c) => {
    return c.json({ status: 'ok' })
  })

// Protected endpoint (requires authentication)
authProcedure.POST('/users')
  .input(userSchema)
  .service(async (c) => {
    const userData = c.input
    return c.json({ success: true })
  })

// Admin endpoint
adminProcedure.DELETE('/users/:id')
  .noInput()
  .service(async (c) => {
    const userId = c.param('id')
    return c.json({ deleted: userId })
  })

// Super admin endpoint
superAdminProcedure.POST('/system/config')
  .input(configSchema)
  .service(async (c) => {
    const config = c.input
    return c.json({ updated: true })
  })
*/

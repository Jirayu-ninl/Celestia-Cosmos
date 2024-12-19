import { Hono } from 'hono'
// import { trpcServer } from '@hono/trpc-server'
// import { router as trpcRouter } from '@backend/controllers'
// import { createTRPCContext } from '@backend/trpc/trpc.context'

const app = new Hono().basePath('/api')

app.use('*', async (c, next) => {
  const start = Date.now()
  await next()
  if (process.env.NODE_ENV === 'development') {
    const end = Date.now()
    console.log(`${c.req.method} ${c.req.url} - ${end - start}ms`)
  }
})

// app.use('/trpc/*', async (c, n) => {
//   if (process.env.NODE_ENV === 'development') {
//     console.log(`incoming request ${c.req.url}`)
//   }
//   return trpcServer({
//     endpoint: '/api/trpc',
//     router: trpcRouter,
//     createContext: createTRPCContext,
//     onError:
//       process.env.NODE_ENV === 'development'
//         ? ({ path, error }) => {
//             console.error(
//               `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
//             )
//           }
//         : undefined,
//   })(c, n)
// })

app.onError((err, c) => {
  console.error(`Global error handler:`, err)
  return c.json(
    {
      success: false,
      message:
        process.env.NODE_ENV === 'development'
          ? err.message
          : 'Internal Server Error',
    },
    500,
  )
})

export { app as server }

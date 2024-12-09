import { Hono } from 'hono'

const app = new Hono().basePath('/api')

app.use('*', async (c, next) => {
  const start = Date.now()
  await next()
  if (process.env.NODE_ENV === 'development') {
    const end = Date.now()
    console.log(`${c.req.method} ${c.req.url} - ${end - start}ms`)
  }
})

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

import { handle } from 'hono/vercel'
import { server } from '@backend/hono'

// export const runtime = 'edge'

export const GET = handle(server)
export const POST = handle(server)
export const PUT = handle(server)
export const DELETE = handle(server)
export const PATCH = handle(server)
export const HEAD = handle(server)

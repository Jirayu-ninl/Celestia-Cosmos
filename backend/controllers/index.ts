import { createTRPCRouter } from '../trpc'
import { debuggerRouter } from './debugger'
import { userRouter } from './user'
import { webRouter } from './web'

export const router = createTRPCRouter({
  debugger: debuggerRouter,
  user: userRouter,
  web: webRouter,
})

export const AppController = { router }
export type Router = typeof router

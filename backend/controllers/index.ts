import { createTRPCRouter } from '../trpc'
import { exampleRouter } from './example'
import { userRouter } from './user'
import { webRouter } from './web'

export const router = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
  web: webRouter,
})

export const AppController = { router }
export type Router = typeof router

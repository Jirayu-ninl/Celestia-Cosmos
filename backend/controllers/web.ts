import { createTRPCRouter } from '../trpc'
import { webSearchRouter } from './web.search'
import { webContactRouter } from './web.contact'

export const webRouter = createTRPCRouter({
  search: webSearchRouter,
  contact: webContactRouter,
})

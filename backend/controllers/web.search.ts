import { createTRPCRouter, p } from '@backend/trpc'
import { SERVICES, SCHEMA } from '@backend/modules/web/search'

export const webSearchRouter = createTRPCRouter({
  getSearchIndex: p.publicProcedure
    .query(SERVICES.getSearchIndex),
})

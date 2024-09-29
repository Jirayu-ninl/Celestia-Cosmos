import { createTRPCRouter, p } from '@backend/trpc'
import { SERVICES, SCHEMA } from '@backend/modules/user/asset'

export const userAssetRouter = createTRPCRouter({
  addAsset: p.publicProcedure
    .input(SCHEMA.addAssetSchema)
    .mutation(SERVICES.addAsset),
})

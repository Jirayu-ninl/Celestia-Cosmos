import { createTRPCRouter } from '../trpc'
import { userPortalRouter } from './user.portal'
import { userProfileRouter } from './user.profile'
import { userAssetRouter } from './user.asset'

export const userRouter = createTRPCRouter({
  portal: userPortalRouter,
  profile: userProfileRouter,
  asset: userAssetRouter,
})

import type { addAssetInput } from './schema'
import type { Context } from '@backend/trpc/trpc.context'
import { trpcResponse } from 'packages/nextjs/utils/server/trpc'
import { sessionVerify } from '@backend/utils/session'

export const addAsset = async ({
  ctx,
  input,
}: {
  ctx: Context
  input: addAssetInput
}) => {
  const isSession = await sessionVerify(ctx.session)
  if (isSession.noSession || !isSession.user) return isSession.res

  const user = isSession.user
  const asset = await ctx.prisma.asset.create({
    data: {
      ...input,
      userId: user.id,
    },
  })

  if (!asset) return trpcResponse.fail('Add asset failed')

  return trpcResponse.success('Add asset successfully', { data: asset })
}

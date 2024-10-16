import type { dropEmailInput } from './schema'
import type { Context } from '@backend/trpc/trpc.context'
import { trpcResponse } from '@nexel/nextjs/utils/server/trpc'

export const dropEmail = async ({
  ctx,
  input,
}: {
  ctx: Context
  input: dropEmailInput
}) => {
  try {
    const subscribeList: any = await ctx.prisma.celestia.findUnique({
      where: { key: 'newsletter' },
    })

    if (subscribeList) {
      if (subscribeList.content) {
        await ctx.prisma.celestia.update({
          where: { key: 'newsletter' },
          data: {
            data: {
              users: [...subscribeList.content['users'], input],
            },
          },
        })
      }
    } else {
      await ctx.prisma.celestia.create({
        data: {
          key: 'newsletter',
          data: {
            users: [input],
          },
        },
      })
    }
    return trpcResponse.success('Drop email success')
  } catch (e) {
    throw new Error("Database/Aurora/Newsletter: Can't add user email")
  }
}

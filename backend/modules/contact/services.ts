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
      where: { title: 'newsletter' },
    })

    if (subscribeList) {
      if (subscribeList.content) {
        await ctx.prisma.celestia.update({
          where: { title: 'newsletter' },
          data: {
            content: {
              users: [...subscribeList.content['users'], input],
            },
          },
        })
      }
    } else {
      await ctx.prisma.celestia.create({
        data: {
          title: 'newsletter',
          content: {
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

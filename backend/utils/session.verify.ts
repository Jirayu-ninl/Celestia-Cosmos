import { Session } from 'next-auth'
import { prisma } from '@backend/database'
import { trpcResponse } from 'packages/nextjs/utils/server/trpc.response'

export const sessionVerify = async (session: Session | null) => {
  if (!session || !session.user) {
    return {
      noSession: true,
      res: trpcResponse.fail('No session found'),
    }
  }
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  })
  if (!user) {
    return {
      noSession: true,
      res: trpcResponse.fail('No username that requested'),
    }
  }
  return { noSession: false, user }
}

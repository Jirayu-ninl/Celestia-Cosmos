import { getSession } from '../auth'
import { AppController } from '../controllers'
import { t } from '../trpc/trpc.init'
import { prisma } from '../database'
import { s3 } from '@nexel/nextjs/libs/storage'

const trpcCaller = async (req: Request, res: Response) => {
  const session = await getSession()
  const createCaller = t.createCallerFactory(AppController.router)
  const caller = createCaller({
    req: req,
    resHeaders: res.headers,
    session,
    prisma,
    s3,
  })
  return caller
}

export { trpcCaller }

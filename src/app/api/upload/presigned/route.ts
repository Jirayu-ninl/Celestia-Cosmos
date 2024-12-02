import { getSession } from '@backend/auth/aurora'
import { presignedRoute } from '@core/storage/func/upload.presigned.route'

export const GET = async (req: Request) => {
  const session = await getSession()
  return await presignedRoute(req, session)
}

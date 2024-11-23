'use server'
import { prisma } from '@database'
import { WEB } from '@/enums/database'

const subscribeCall = async (data: { email: string }) => {
  try {
    const subscribeList: any = await prisma.celestia.findUnique({
      where: { key: WEB.NEWS_LETTER },
    })

    if (subscribeList) {
      if (subscribeList.content) {
        await prisma.celestia.update({
          where: { key: WEB.NEWS_LETTER },
          data: {
            data: {
              users: [...subscribeList.content['users'], data.email],
            },
          },
        })
      }
    } else {
      await prisma.celestia.create({
        data: {
          key: WEB.NEWS_LETTER,
          data: {
            users: [data.email],
          },
        },
      })
    }
  } catch (e) {
    throw new Error("Database/IceJiVerse/Newsletter: Can't add user email")
  }
}
export { subscribeCall }

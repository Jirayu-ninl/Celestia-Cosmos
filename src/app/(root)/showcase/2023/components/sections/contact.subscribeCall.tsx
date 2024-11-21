'use server'
import { prisma } from '@database'

const subscribeCall = async (data: { email: string }) => {
  try {
    const subscribeList: any = await prisma.celestia.findUnique({
      where: { key: 'newsletter' },
    })

    if (subscribeList) {
      if (subscribeList.content) {
        await prisma.celestia.update({
          where: { key: 'newsletter' },
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
          key: 'newsletter',
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

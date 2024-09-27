'use server'
import { prisma } from '@database'

const subscribeCall = async (data: { email: string }) => {
  try {
    const subscribeList: any = await prisma.celestia.findUnique({
      where: { title: 'newsletter' },
    })

    if (subscribeList) {
      if (subscribeList.content) {
        await prisma.celestia.update({
          where: { title: 'newsletter' },
          data: {
            content: {
              users: [...subscribeList.content['users'], data.email],
            },
          },
        })
      }
    } else {
      await prisma.celestia.create({
        data: {
          title: 'newsletter',
          content: {
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

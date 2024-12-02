import bcrypt from 'bcryptjs'
import { prisma } from '@backend/database'
import { getErrorMessage } from '@core/utils/server/error'

const CredentialsSignUp: (c: { email: string; password: string }) => Promise<{
  session?: string
  warn?: string
  error?: string
} | void> = async (credential) => {
  try {
    if (!prisma) {
      throw new Error('DB: Connection failed')
    }

    const { email, password } = credential
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    })
    if (existingEmail) {
      return {
        warn: 'This email was signup, Please login with your email or your social account',
      }
    }

    const user = await prisma.user.create({
      data: {
        username: email.split('@')[0],
        name: email.split('@')[0],
        email,
        image: '/user/default/profile.png',
      },
    })
    if (!user) {
      return {
        error: 'Create user data failed',
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const cred = await prisma.user.create({
      data: {
        username: email.split('@')[0],
        name: email.split('@')[0],
        email: email,
        image: '/user/default/profile.png',
        password: hashedPassword,
      },
    })
    if (!cred) {
      return {
        error: 'Create login info failed',
      }
    }
    return { data: 'success' }
  } catch (e) {
    const message = getErrorMessage(e)
    return { error: message }
  }
}

export { CredentialsSignUp }

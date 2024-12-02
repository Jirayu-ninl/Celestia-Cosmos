/* eslint-disable @typescript-eslint/no-explicit-any */
import { compare } from 'bcryptjs'
import { prisma } from '@backend/database'
import { getErrorMessage } from '@core/utils/server/error'

const CredentialsSignIn: (c: { email: string; password: string }) => Promise<{
  user?: any
  warn?: string
  error?: string
} | void> = async (credentials) => {
  if (!prisma) {
    throw new Error('DB: Connection failed')
  }

  if (!credentials.email || !credentials.password) {
    return { error: 'Invalid credential' }
  }

  try {
    const { email, password } = credentials
    const reqCredential = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (!reqCredential) {
      return { error: 'No credential that requested' }
    }
    if (
      reqCredential.password &&
      !(await compare(password, reqCredential.password))
    ) {
      return { warn: 'Password not matched' }
    }
    const user = await prisma.user.findUnique({
      where: { email },
    })
    return { user }
  } catch (e) {
    const message = getErrorMessage(e)
    return { error: message }
  }
}

export { CredentialsSignIn }
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'
import { prisma } from '@backend/database'
import { setResponse as setRes } from '@core/utils/server/response.status'

const CredentialsSignUp = async (request: Request) => {
  type Credential = {
    email: string
    password: string
    token: string
  }

  const req: Credential = await request.json()
  try {
    const cookieHeader = cookies()
    const headerTempToken = cookieHeader.get('tempToken')

    if (!headerTempToken) {
      return setRes.unauthorized('Invalid Token')
    }

    if (
      headerTempToken.value.length === 32 &&
      req.token === headerTempToken.value
    ) {
      try {
        const { email, password } = req

        const existingEmail = await prisma.user.findUnique({
          where: { email },
        })
        if (existingEmail) {
          return setRes.success(
            'This email was signup, Please login with your social account',
          )
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        await prisma.user.create({
          data: {
            username: email.split('@')[0],
            name: email.split('@')[0],
            email: email,
            image: '/user/default/profile.png',
            password: hashedPassword,
          },
        })
        return setRes.created('Sign up successfully')
      } catch (error) {
        return setRes.internalError('Database error, please try later')
      }
    }
  } catch (error) {
    return setRes.invalidHeader('Invalid Header')
  }
}

export { CredentialsSignUp }

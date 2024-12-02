'use server'

import { CredentialsSignUp } from './credential'
import { getErrorMessage } from '@core/utils/server/error'
import { ErrorHandler } from '../services/monitoring'

const SignUp: (c: { email: string; password: string }) => Promise<{
  session?: string
  warn?: string
  error?: string
} | void> = async (credential) => {
  try {
    const res = await CredentialsSignUp(credential)
    if (res?.error) {
      return { error: res.error }
    }
    if (res?.warn) {
      return { warn: res.warn }
    }

    return { data: res }
  } catch (e) {
    ErrorHandler(e)
    const message = getErrorMessage(e)
    return { error: message }
  }
}
export { SignUp }

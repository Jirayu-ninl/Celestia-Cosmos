/* eslint-disable @typescript-eslint/no-explicit-any */

import { getProviders } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@backend/auth'
import { SetErrorToast } from '@components/toast'
import { SignInIceJiVerse, SignInProviders } from './components'

const Page = async () => {
  const providers = await getProviders()
  // const providers = null
  const session = await getServerSession(authOptions)
  // const session = null

  return (
    <>
      <SetErrorToast />
      <SignInIceJiVerse>
        <SignInProviders providers={providers} session={session} />
      </SignInIceJiVerse>
    </>
  )
}

export default Page

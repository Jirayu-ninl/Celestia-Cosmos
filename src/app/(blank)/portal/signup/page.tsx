import { getProviders } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@backend/auth'
import { SetErrorToast } from '@components/toast'
import { SignUpIceJiVerse, SignInProviders } from '../components'

const Page = async () => {
  const providers = await getProviders()
  // const providers = null
  const session = await getServerSession(authOptions)
  // const session = null
  return (
    <>
      <SetErrorToast />
      <SignUpIceJiVerse>
        <SignInProviders providers={providers} session={session} />
      </SignUpIceJiVerse>
    </>
  )
}

export default Page

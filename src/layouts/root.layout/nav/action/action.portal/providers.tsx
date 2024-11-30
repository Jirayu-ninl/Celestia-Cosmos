import type { Providers } from 'types'
import type { Dispatch } from 'react'
// import { useEffect } from 'react'
// import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa6'
import { signIn } from 'next-auth/react'

export const ProvidersComponent = ({
  providers,
  isLoading,
  setIsLoading,
}: {
  providers: Providers | null
  isLoading: boolean
  setIsLoading: Dispatch<boolean>
}) => {
  return (
    <>
      {providers && (
        <div
          className={clsx(
            'flex h-8 justify-center',
            isLoading && 'pointer-events-none opacity-40',
          )}
        >
          <div
            className='Anim flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-foreground/10 text-white hover:bg-blue-500'
            onClick={() => {
              setIsLoading(true)
              signIn(providers.facebook.id)
            }}
          >
            <FaFacebookF />
          </div>
          <div
            className='Anim ml-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-foreground/10 text-white hover:bg-red-500'
            onClick={() => {
              setIsLoading(true)
              signIn(providers.google.id)
            }}
          >
            <FaGoogle />
          </div>
          <div
            className='Anim ml-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-foreground/10 text-white hover:bg-slate-800'
            onClick={() => {
              setIsLoading(true)
              signIn(providers.github.id)
            }}
          >
            <FaGithub />
          </div>
        </div>
      )}
    </>
  )
}

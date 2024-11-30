import type { Session, Providers } from 'types'
import { useState } from 'react'
import clsx from 'clsx'
import { useShallow } from 'zustand/shallow'
import { AnimatePresence } from 'framer-motion'
import { useUserState } from '@/store'
import { SignInComponent } from './signIn'
import { SignUpComponent } from './signUp'
import { ProvidersComponent } from './providers'

export enum CASE {
  SIGN_IN = 'sign_In',
  SIGN_UP = 'sign_Up',
}

export const Portal = ({ providers }: { providers: Providers | null }) => {
  const [_case, _setCase] = useState<CASE>(CASE.SIGN_IN)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [_onSetUser, _notifications] = useUserState(
    useShallow((st) => [st.onSetUser, st.notifications]),
  )

  return (
    <>
      <div className='relative flex min-w-56 flex-col items-center py-6 text-sm'>
        <div
          className={clsx(
            'ml-auto rounded-md bg-foreground/10',
            isLoading && 'pointer-events-none opacity-40',
          )}
        >
          <button
            type='button'
            className={clsx(
              'Anim rounded-md px-2 py-1',
              _case === CASE.SIGN_IN && 'bg-primary text-black',
            )}
            onClick={() => _setCase(CASE.SIGN_IN)}
          >
            Sign in
          </button>
          <button
            type='button'
            className={clsx(
              'Anim rounded-md px-2 py-1',
              _case === CASE.SIGN_UP && 'bg-primary text-black',
            )}
            onClick={() => _setCase(CASE.SIGN_UP)}
          >
            Sign up
          </button>
        </div>
        <AnimatePresence mode='wait'>
          {_case === CASE.SIGN_IN ? (
            <SignInComponent
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          ) : (
            <SignUpComponent
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          )}
        </AnimatePresence>
        <div
          className={clsx(
            'my-6 flex w-full justify-center',
            isLoading && 'opacity-40',
          )}
        >
          <div className='my-auto h-px w-8 bg-white/30' />
          <p className='px-3 text-xs'>or Continue with</p>
          <div className='my-auto h-px w-8 bg-white/30' />
        </div>
        <ProvidersComponent
          providers={providers}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    </>
  )
}

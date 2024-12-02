import type { Session } from 'types'
import { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useShallow } from 'zustand/shallow'
import clsx from 'clsx'
import { useUserState } from '@/store'
import { Image } from '@components'
import { LogOut } from '@cosmos/assets/icons'
import { UserMenu } from './user.menu'
import { UserNotification } from './notification'
export const User = ({ session }: { session: Session }) => {
  const [isSignOut, setIsSignOut] = useState(false)
  const [_onSetUser, _notifications] = useUserState(
    useShallow((st) => [st.onSetUser, st.notifications]),
  )

  const username =
    session.user.username.length > 8
      ? session.user.username.slice(0, 8) + '.'
      : session.user.username

  const onSignOut = () => {
    setIsSignOut(true)
    signOut()
  }

  return (
    <>
      <div className='flex h-fit'>
        <div>
          <Link
            className='Anim flex w-48 cursor-pointer items-center justify-center rounded-md bg-foreground/10 p-2 hover:bg-foreground/20'
            href={`/profile/${session.user.username}`}
          >
            <div className='relative aspect-square w-8 overflow-hidden rounded-md'>
              <Image
                src={session.user.image || '/user/default/profile.png'}
                alt='user profile'
                unoptimized
              />
            </div>
            <div className='grow pl-2'>
              <p className='text-sm font-bold'>{session.user.name}</p>
              <p className='-mt-px text-xs opacity-60'>@{username}</p>
            </div>
          </Link>
          <UserMenu />
          <button
            className={clsx(
              'Anim flex w-full items-center justify-center rounded-md bg-foreground/10 fill-foreground py-1 hover:bg-red-500 hover:fill-white hover:text-white',
              isSignOut && 'opacity-20',
            )}
            onClick={onSignOut}
            disabled={isSignOut}
          >
            <div className='mr-2 aspect-square h-5'>
              <LogOut />
            </div>
            {isSignOut ? 'loading' : 'Sign Out'}
          </button>
        </div>
        <UserNotification />
      </div>
    </>
  )
}

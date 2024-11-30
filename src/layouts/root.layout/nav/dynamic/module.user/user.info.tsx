import type { Session } from 'types'
import { NAV_ACTION, CURSOR } from '@/store'
import { Image } from '@components'

interface UserInfoProps {
  session: Session
  //   session: any
  _onToggleNavAction: (A: NAV_ACTION) => void
  _setCursor: (c: CURSOR | undefined) => void
}

export const UserInfo: React.FC<UserInfoProps> = ({
  session,
  _onToggleNavAction,
  _setCursor,
}) => {
  const name =
    session.user.name.length > 8
      ? session.user.name.slice(0, 8) + '.'
      : session.user.name

  const username =
    session.user.username.length > 8
      ? session.user.username.slice(0, 8) + '.'
      : session.user.username

  return (
    <>
      <div
        className='h-full cursor-pointer px-4 py-1.5'
        style={{ margin: '0 0 0 -8px' }}
        onClick={() => {
          _onToggleNavAction(NAV_ACTION.USER)
          _setCursor(undefined)
        }}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <div className='relative aspect-square h-full overflow-hidden rounded-md'>
            <Image
              src={session.user.image || '/user/default/profile.png'}
              alt='user profile'
              fill
            />
          </div>
          <div className='grow whitespace-nowrap pl-2'>
            <p className='text-sm font-bold'>{name}</p>
            <p className='-mt-px text-xs opacity-60'>@{username}</p>
          </div>
        </div>
      </div>
    </>
  )
}

import type { Session } from '@types'
import { startCase } from 'lodash-es'
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
  const username = session.user.name
    ? session.user.name.length > 8
      ? session.user.name?.slice(0, 8) + '.'
      : session.user.name
    : 'My profile'
  return (
    <>
      <div
        className='h-full cursor-pointer py-1.5 px-4'
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
              unoptimized
            />
          </div>
          <div className='grow pl-2'>
            <p className='text-sm font-bold'>{username}</p>
            <p className='-mt-px text-xs opacity-60'>
              {startCase(session.user.role)}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

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
        className='h-full cursor-pointer p-1.5'
        style={{ margin: '0 0 0 -8px' }}
        onClick={() => {
          _onToggleNavAction(NAV_ACTION.USER)
          _setCursor(undefined)
        }}
      >
        <div className='flex h-full w-full items-center justify-center rounded-md bg-foreground/10 hover:bg-foreground/20'>
          <div className='relative aspect-square h-full overflow-hidden rounded-md'>
            <Image
              //   src='https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/307984165_5684275524970487_7646615497662888117_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hrG_OWpKDpgQ7kNvgG_CUHI&_nc_ht=scontent.fbkk13-3.fna&oh=00_AYABxrJKk10DbFzpWeaaL9aHsMVvfyS22ym7R4w6lhCOTg&oe=667A0509'
              src={session.user.image || '/user/default/profile.png'}
              alt='user profile'
              unoptimized
            />
          </div>
          <div className='grow px-2'>
            <p className='text-sm font-bold'>{startCase(username)}</p>
            <p className='-mt-px text-xs opacity-60'>{session.user.role}</p>
          </div>
        </div>
      </div>
    </>
  )
}

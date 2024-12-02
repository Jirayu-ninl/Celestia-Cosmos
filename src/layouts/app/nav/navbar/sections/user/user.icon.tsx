import type { Session } from 'next-auth'
import type { MotionValue } from 'framer-motion'
import type { Dispatch, SetStateAction } from 'react'
import { memo } from 'react'
import Link from 'next/link'
import { DockItem } from '@cosmos/ui/dock/dockItem/y.opacity'
import { User as UserSvg } from '@cosmos/assets/icons'
import { Image } from '@components'

interface UserIconProps {
  mouseY: MotionValue<number>
  session: Session | null
  setOpenUserAction: Dispatch<SetStateAction<boolean>>
}

export const UserIcon: React.FC<UserIconProps> = memo(
  ({ mouseY, session, setOpenUserAction }) => {
    if (!session) {
      return (
        <Link href='/portal'>
          <DockItem mouseY={mouseY}>
            <UserSvg />
          </DockItem>
        </Link>
      )
    }

    return (
      <>
        <div
          className='relative aspect-square w-8 cursor-pointer overflow-hidden rounded-sm'
          onClick={() => setOpenUserAction((st) => !st)}
        >
          <Image
            src={session.user.image || '/user/default/profile.png'}
            alt='user profile'
            unoptimized
          />
        </div>
      </>
    )
  },
)

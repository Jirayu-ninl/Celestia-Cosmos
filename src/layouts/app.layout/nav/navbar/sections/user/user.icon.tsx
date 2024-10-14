import type { Session } from 'next-auth'
import type { MotionValue } from 'framer-motion'
import type { Dispatch, SetStateAction } from 'react'
import { memo } from 'react'
import Link from 'next/link'
import { DockItem } from '../../../dock'
import { User as UserSvg } from '@nexel/cosmos/assets/icons'
import { Image } from '@components'

interface UserIconProps {
  mouseX: MotionValue<number>
  session: Session | null
  setOpenUserAction: Dispatch<SetStateAction<boolean>>
}

export const UserIcon: React.FC<UserIconProps> = memo(
  ({ mouseX, session, setOpenUserAction }) => {
    if (!session) {
      return (
        <Link href='/portal'>
          <DockItem mouseX={mouseX}>
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

import type { Session } from 'next-auth'
import { motion } from 'framer-motion'
import clsx from 'clsx'
// import { useShallow } from 'zustand/react/shallow'
import { NAV_ACTION, NAV, CURSOR } from '@/store'
// import {
//   dynNavAnimationConfig,
//   iconAnimationConfig,
// } from '../animations/config'
import { UserInfo } from './user.info'

interface UserModulesProps {
  session: Session | null
  _nav: NAV
  _onToggleNavAction: (A: NAV_ACTION) => void
  _setCursor: (c: CURSOR | undefined) => void
}

export const UserModules: React.FC<UserModulesProps> = ({
  session,
  _nav,
  _onToggleNavAction,
  _setCursor,
}) => {
  // const iconAnimation = iconAnimationConfig(_nav)

  if (!session) {
    return null
  }

  return (
    <>
      <div
        className={clsx(
          'flex grow items-center justify-end rounded-md border border-foreground/[0.07] bg-foreground/[0.05] shadow-md backdrop-blur-md',
          (_nav === NAV.TOP || _nav === NAV.BOTTOM) && 'ml-2',
          (_nav === NAV.LEFT || _nav === NAV.RIGHT) &&
            'my-2 flex-col rounded-b-md',
        )}
      >
        <motion.div
          className={clsx(
            'flex fill-foreground',
            (_nav === NAV.TOP || _nav === NAV.BOTTOM) &&
              'h-full [&>div]:h-full',
            (_nav === NAV.LEFT || _nav === NAV.RIGHT) &&
              'w-full flex-col [&>div]:w-full',
          )}
        >
          <UserInfo
            session={session}
            _onToggleNavAction={_onToggleNavAction}
            _setCursor={_setCursor}
          />
        </motion.div>
      </div>
    </>
  )
}

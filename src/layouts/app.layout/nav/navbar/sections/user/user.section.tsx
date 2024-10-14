import type { Session } from 'next-auth'
import type { MotionValue } from 'framer-motion'
import { memo, useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { DockItem } from '../../../dock'
import { Settings as SettingsIcon } from '@nexel/cosmos/assets/icons'
import { useOnClickOutside } from '@nexel/nextjs/libs/hooks/events'
import { UserIcon } from './user.icon'
import { UserAction } from './action'

interface UserSectionProps {
  mouseX: MotionValue<number>
  session: Session | null
}

export const User: React.FC<UserSectionProps> = memo(({ mouseX, session }) => {
  const [openUserAction, setOpenUserAction] = useState(false)
  const $container = useRef(null)

  useOnClickOutside($container, () => setOpenUserAction(false))

  return (
    <>
      <div
        className='relative flex w-full flex-col items-center fill-foreground [&>a]:my-2 [&>div]:my-2'
        ref={$container}
      >
        <DockItem mouseX={mouseX}>
          <SettingsIcon />
        </DockItem>
        <div className='my-2 h-0.5 w-6 rounded-full bg-foreground/20' />
        <UserIcon
          mouseX={mouseX}
          session={session}
          setOpenUserAction={setOpenUserAction}
        />
        <AnimatePresence>
          {session && openUserAction && <UserAction session={session} />}
        </AnimatePresence>
      </div>
    </>
  )
})

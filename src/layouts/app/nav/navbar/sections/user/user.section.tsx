import type { Session } from 'next-auth'
import type { MotionValue } from 'framer-motion'
import { memo, useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { DockItem } from '@cosmos/ui/dock/dockItem/y.opacity'
import { Settings as SettingsIcon } from '@cosmos/assets/icons'
import { useOnClickOutside } from '@core/hooks/events'
import { UserIcon } from './user.icon'
import { UserAction } from './action'

interface UserSectionProps {
  mouseY: MotionValue<number>
  session: Session | null
}

export const User: React.FC<UserSectionProps> = memo(({ mouseY, session }) => {
  const [openUserAction, setOpenUserAction] = useState(false)
  const $container = useRef(null)

  useOnClickOutside($container, () => setOpenUserAction(false))

  return (
    <>
      <div
        className='relative flex w-full flex-col items-center fill-foreground [&>a]:my-2 [&>div]:my-2'
        ref={$container}
      >
        <DockItem mouseY={mouseY}>
          <SettingsIcon />
        </DockItem>
        <div className='my-2 h-0.5 w-6 rounded-full bg-foreground/20' />
        <UserIcon
          mouseY={mouseY}
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

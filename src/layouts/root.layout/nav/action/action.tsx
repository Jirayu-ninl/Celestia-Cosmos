import type { Session, Providers } from '@types'
import { useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { startCase } from 'lodash-es'
import { NAV_ACTION } from '@/store'
import { useLockedBody } from '@nexel/nextjs/libs/hooks/layouts'
import { Settings } from './action.settings'
import { User } from './action.user'
import { Cart } from './action.cart'
import { DynNavMobile } from './action.dynNavMobile'

interface NavActionProps {
  session: Session | null
  providers: Providers | null
  action: NAV_ACTION | undefined
}

export const NavAction: React.FC<NavActionProps> = ({
  session,
  providers,
  action,
}) => {
  const Components = useMemo<Record<NAV_ACTION, React.FC<any>>>(
    () => ({
      settings: Settings,
      user: () => <User session={session} providers={providers} />,
      cart: Cart,
      notifications: () => null,
      wallet: () => null,
      menu_canvas: () => null,
      dyn_nav_mobile: DynNavMobile,
    }),
    [session, providers],
  )

  const Component = Components[action as NAV_ACTION]

  const [locked, setLocked] = useLockedBody()
  useEffect(() => {
    setLocked(action !== undefined)
  }, [action, setLocked])

  const actionAnimation = {
    initial: { y: 20, opacity: 0, x: '-50%' },
    animate: { y: 0, opacity: 1, x: '-50%' },
    exit: { y: 20, opacity: 0, x: '-50%' },
  }

  return (
    <>
      <AnimatePresence>
        {action && action !== NAV_ACTION.MENU_CANVAS && (
          <motion.div
            className='absolute bottom-20 left-1/2 z-90 min-w-48 -translate-x-1/2 rounded-md border border-foreground/10 bg-background/20 px-4 py-6 backdrop-blur-md'
            initial={actionAnimation.initial}
            animate={actionAnimation.animate}
            exit={actionAnimation.exit}
          >
            <h6 className='mb-2 font-bold'>{startCase(action)}</h6>
            <Component />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

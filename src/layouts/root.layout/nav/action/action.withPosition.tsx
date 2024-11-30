import type { Session, Providers } from 'types'
import { useMemo, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { startCase } from 'lodash-es'
import clsx from 'clsx'
import { NAV, NAV_ACTION } from '@/store'
import { Settings } from './action.settings'
import { User } from './action.user'
import { Portal } from './action.portal'
import { Cart } from './action.cart'
import { DynNavMobile } from './action.dynNavMobile'

interface NavActionProps {
  session: Session | null
  providers: Providers | null
  action: NAV_ACTION | undefined
  _nav: NAV
}

export const NavAction: React.FC<NavActionProps> = ({
  session,
  providers,
  action,
  _nav,
}) => {
  const Components = useMemo<Record<NAV_ACTION, React.FC<any>>>(
    () => ({
      settings: Settings,
      user: memo(() => (session ? <User session={session} /> : null)),
      portal: memo(() => <Portal providers={providers} />),
      cart: Cart,
      notifications: () => null,
      wallet: () => null,
      menu_canvas: () => null,
      dyn_nav_mobile: DynNavMobile,
    }),
    [session, providers],
  )

  const Component =
    action !== undefined ? Components[action as NAV_ACTION] : () => null

  const actionAnimation = {
    initial:
      _nav === (NAV.TOP || NAV.BOTTOM)
        ? { y: 20, opacity: 0, x: '-50%' }
        : _nav === (NAV.LEFT || NAV.RIGHT)
          ? { x: 20, opacity: 0 }
          : {},
    animate:
      _nav === (NAV.TOP || NAV.BOTTOM)
        ? { y: 0, opacity: 1, x: '-50%' }
        : _nav === (NAV.LEFT || NAV.RIGHT)
          ? { x: 0, opacity: 1 }
          : {},
    exit:
      _nav === (NAV.TOP || NAV.BOTTOM)
        ? { y: 20, opacity: 0, x: '-50%' }
        : _nav === (NAV.LEFT || NAV.RIGHT)
          ? { x: 20, opacity: 0 }
          : {},
  }

  return (
    <>
      <AnimatePresence>
        {action && action !== NAV_ACTION.MENU_CANVAS && (
          <motion.div
            className={clsx(
              'absolute z-90 min-w-48 rounded-md border border-foreground/10 bg-background/20 px-4 py-6 backdrop-blur-md',
              _nav === NAV.BOTTOM && 'bottom-20 left-1/2 -translate-x-1/2',
              _nav === NAV.TOP && 'left-1/2 top-20 -translate-x-1/2',
              _nav === NAV.LEFT && 'left-20 top-5',
              _nav === NAV.RIGHT && 'right-20 top-5',
            )}
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

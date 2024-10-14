import type { MotionValue } from 'framer-motion'
import type { Session } from 'next-auth'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { NAV_ACTION, CURSOR, MODAL } from '@/store'
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  User as UserIcon,
  Cart as CartIcon,
} from '@nexel/cosmos/assets/icons'
import { DockItem } from '../../dock'

interface ShortcutSectionProps {
  _navAction: NAV_ACTION | undefined
  _setCursor: (cursor: CURSOR | undefined) => void
  _onToggleNavAction: (action: NAV_ACTION) => void
  _onToggleModal: (modal: MODAL) => void
  mouseX: MotionValue<number>
  session: Session | null
}

export const Shortcut: React.FC<ShortcutSectionProps> = ({
  _navAction,
  _onToggleNavAction,
  _onToggleModal,
  mouseX,
  session,
}) => {
  return (
    <>
      <motion.div className='flex w-full flex-col fill-foreground pl-1 [&>div]:my-2'>
        <DockItem
          mouseX={mouseX}
          onClick={() => {
            _onToggleNavAction(session ? NAV_ACTION.USER : NAV_ACTION.PORTAL)
          }}
          className={clsx(session && 'md:hidden')}
        >
          <UserIcon />
        </DockItem>
        <DockItem
          mouseX={mouseX}
          onClick={() => {
            _onToggleNavAction(NAV_ACTION.CART)
          }}
        >
          <CartIcon />
        </DockItem>
        <DockItem
          mouseX={mouseX}
          onClick={() => {
            _onToggleNavAction(NAV_ACTION.MENU_CANVAS)
          }}
        >
          {_navAction === NAV_ACTION.MENU_CANVAS ? <CloseIcon /> : <MenuIcon />}
        </DockItem>
      </motion.div>
    </>
  )
}

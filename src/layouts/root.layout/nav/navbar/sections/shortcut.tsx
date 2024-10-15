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
import { Search } from './shortcut.search'
import { DockItem } from '@nexel/cosmos/ui/dock/dockItem/x.width'

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
  _setCursor,
  _onToggleNavAction,
  _onToggleModal,
  mouseX,
  session,
}) => {
  return (
    <>
      <motion.div className='flex h-full items-end fill-foreground pb-4 [&>div]:mx-2'>
        <DockItem
          mouseX={mouseX}
          width={112}
          className='hidden md:block'
          onClick={() => _onToggleModal(MODAL.SEARCH)}
        >
          <Search />
        </DockItem>
        <DockItem
          mouseX={mouseX}
          onClick={() => {
            _onToggleNavAction(session ? NAV_ACTION.USER : NAV_ACTION.PORTAL)
            _setCursor(undefined)
          }}
          className={clsx(session && 'md:hidden')}
        >
          <UserIcon />
        </DockItem>
        <DockItem
          mouseX={mouseX}
          onClick={() => {
            _onToggleNavAction(NAV_ACTION.CART)
            _setCursor(undefined)
          }}
        >
          <CartIcon />
        </DockItem>
        <DockItem
          mouseX={mouseX}
          onClick={() => {
            _onToggleNavAction(NAV_ACTION.MENU_CANVAS)
            _setCursor(undefined)
          }}
        >
          {_navAction === NAV_ACTION.MENU_CANVAS ? <CloseIcon /> : <MenuIcon />}
        </DockItem>
      </motion.div>
    </>
  )
}

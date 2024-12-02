import type { Session } from 'next-auth'
import { motion } from 'framer-motion'
import { NAV_ACTION, CURSOR } from '@/store'
import { User as UserIcon } from '@cosmos/assets/icons'
import { UserInfo } from './user.info'

interface UserSectionProps {
  session: Session | null
  _setCursor: (cursor: CURSOR | undefined) => void
  _onToggleNavAction: (action: NAV_ACTION) => void
}

export const UserSection: React.FC<UserSectionProps> = ({
  session,
  _setCursor,
  _onToggleNavAction,
}) => {
  if (!session) {
    return (
      <>
        <motion.div
          className='cursor-pointer'
          onClick={() => {
            _onToggleNavAction(NAV_ACTION.USER)
            _setCursor(undefined)
          }}
        >
          <UserIcon />
        </motion.div>
      </>
    )
  }
  return (
    <>
      <UserInfo
        session={session}
        _onToggleNavAction={_onToggleNavAction}
        _setCursor={_setCursor}
      />
    </>
  )
}

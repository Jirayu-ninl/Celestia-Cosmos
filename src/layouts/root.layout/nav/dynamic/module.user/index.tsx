import type { Session } from 'next-auth'
import { memo } from 'react'
import { motion } from 'framer-motion'
import { NAV_ACTION, CURSOR } from '@/store'
import { UserInfo } from './user.info'

interface UserModuleProps {
  session: Session | null
  _onToggleNavAction: (A: NAV_ACTION) => void
  _setCursor: (c: CURSOR | undefined) => void
}

export const UserModule: React.FC<UserModuleProps> = memo(
  ({ session, _onToggleNavAction, _setCursor }) => {
    if (!session) return null

    return (
      <>
        <div className='ml-2 hidden grow items-center justify-end rounded-md border border-foreground/[0.07] bg-foreground/[0.05] shadow-md backdrop-blur-md md:flex'>
          <motion.div className='flex h-full fill-foreground [&>div]:h-full'>
            <UserInfo
              session={session}
              _onToggleNavAction={_onToggleNavAction}
              _setCursor={_setCursor}
            />
          </motion.div>
        </div>
      </>
    )
  },
)

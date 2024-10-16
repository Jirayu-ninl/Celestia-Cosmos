import type { Session } from 'next-auth'
import { motion } from 'framer-motion'
import { User } from '../../../../../../root.layout/nav/action/action.user'

interface UserActionProps {
  session: Session
}

export const UserAction: React.FC<UserActionProps> = ({ session }) => {
  return (
    <>
      <motion.div
        className='absolute -bottom-2 left-14 z-90 rounded-md border border-foreground/10 p-3 backdrop-blur-md bg-background/90'
        initial={{ y: 20, opacity: 0, x: 0 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        exit={{ y: 20, opacity: 0, x: 0 }}
      >
        <User session={session} />
      </motion.div>
    </>
  )
}

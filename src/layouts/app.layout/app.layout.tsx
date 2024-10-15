import type { Session } from '@types'
// import { Fallback } from './app.fallback'
import { ClearUserStore, SetUserStore } from './app.client'
import { NavBar } from './nav'

interface AppLayoutProps {
  children: React.ReactNode
  session: Session | null
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, session }) => {
  return (
    <>
      {!(session && session.user) ? (
        <ClearUserStore />
      ) : (
        <SetUserStore user={session.user} />
      )}
      {children}
      <NavBar session={session} />
    </>
  )
}

import type { Session, Providers } from 'types'
import { NavBar, NavCanvas } from './nav'
import { Footer } from './footer'

interface RootLayoutProps {
  children: React.ReactNode
  session: Session | null
  providers: Providers | null
}

export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  session,
  providers,
}) => {
  return (
    <>
      {children}
      <NavBar session={session} providers={providers} />
      <NavCanvas />
      <Footer />
    </>
  )
}

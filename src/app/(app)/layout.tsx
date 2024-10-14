import { getServerSession } from 'next-auth'
import { authOptions } from '@backend/auth'
import { AppLayout } from '@/layouts'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <>
      <AppLayout session={session}>{children}</AppLayout>
    </>
  )
}

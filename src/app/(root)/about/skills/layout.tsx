export const metadata = {
  title: 'About - My skills',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-gradient-to-tr from-background-deep to-foreground/10'>
      {children}
    </div>
  )
}

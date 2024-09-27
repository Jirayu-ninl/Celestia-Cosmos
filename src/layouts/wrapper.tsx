import { Providers } from './providers'
import { Controllers } from './controllers'
import { GlobalComponent } from './global'

const Wrapper = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Providers>
        {children}
        <GlobalComponent />
        <Controllers />
      </Providers>
    </>
  )
}

export { Wrapper }

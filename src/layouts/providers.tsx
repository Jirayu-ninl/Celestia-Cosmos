import { headers } from 'next/headers'
import { TrpcProvider } from './provider.trpc'
// import { Web3Provider } from './providers.web3'
import { WagmiProvider as Web3Provider } from '@nexus/providers'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const cookies = headers().get('cookie')
  return (
    <Web3Provider cookies={cookies}>
      <TrpcProvider>{children}</TrpcProvider>
    </Web3Provider>
  )
}

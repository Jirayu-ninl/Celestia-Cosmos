'use client'

// import { useEffect } from 'react'
import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
  // useWalletInfo,
} from '@reown/appkit/react'
// import { useAccount, useSignMessage } from 'wagmi'

export const Client = () => {
  const { open, close } = useAppKit()
  const { address, isConnected, caipAddress, status } = useAppKitAccount()
  const { disconnect } = useDisconnect()
  // const { walletInfo } = useWalletInfo()
  // const { signMessageAsync } = useSignMessage()
  // const { address: wagmiAddress } = useAccount()

  return (
    <>
      <button
        className='rounded-md border border-foreground/30 bg-foreground/10 px-4 py-2'
        onClick={() => open()}
      >
        Connect Wallet
      </button>
      <div className='my-4 w-full rounded-md bg-foreground/5 py-2'>
        <p>isConnected: {isConnected && isConnected.toString()}</p>
        <p>
          Address: {address && `${address.slice(0, 6)}...${address.slice(-4)}`}
        </p>
        <p>status: {status}</p>
      </div>
      {isConnected && (
        <>
          <button
            className='rounded-md border border-foreground/30 bg-foreground/10 px-4 py-2'
            onClick={() => open({ view: 'Account' })}
          >
            View Account
          </button>
          <button
            className='mt-4 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-500'
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </>
      )}
    </>
  )
}

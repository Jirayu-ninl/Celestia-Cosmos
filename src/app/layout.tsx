/* eslint-disable prettier/prettier */
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Prompt } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
// import { AxiomWebVitals } from 'next-axiom'
import clsx from 'clsx'

import { env } from '@env'
import { Wrapper } from '@/layouts'

import 'react-toastify/dist/ReactToastify.css'
import 'nprogress/nprogress.css'
import './globals.css'

export { viewport, metadata } from '@config'

const fInter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const fPrompt = Prompt({
  subsets: ['thai'],
  weight: ['100', '200', '300', '400', '600'],
  display: 'swap',
  variable: '--font-prompt',
})

type AppPropsWithLayout = AppProps & {
  children: React.ReactNode
}

const App = ({ children }: AppPropsWithLayout) => {
  return (
    <html
      lang='en'
      className={clsx(
        fInter.className,
        `${fInter.variable} ${fPrompt.variable}`,
      )}
    >
      {/* <AxiomWebVitals /> */}
      <body suppressHydrationWarning={true}>
        <Wrapper>{children}</Wrapper>
        <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  )
}

export default App

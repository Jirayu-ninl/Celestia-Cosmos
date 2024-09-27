'use client'

import clsx from 'clsx'
import { CSS } from './styles'

export const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx('flex w-dvw flex-col bg-background px-6 2xl:px-0', CSS)}
    >
      {children}
    </div>
  )
}

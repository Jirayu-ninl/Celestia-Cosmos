'use client'

import clsx from 'clsx'
import { CSS } from './styles'

export const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        'flex w-dvw flex-col items-center bg-background py-24',
        CSS,
      )}
    >
      {children}
    </div>
  )
}

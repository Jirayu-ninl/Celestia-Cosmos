import type { MotionValue } from 'framer-motion'
import { memo } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { DockItem } from '@nexel/cosmos/ui/dock/dockItem/y.opacity'
import { appRoutes, APP_ROUTES } from '@routes'

interface MenuWithSessionSectionProps {
  mouseY: MotionValue<number>
  page: APP_ROUTES
}

export const WithSession: React.FC<MenuWithSessionSectionProps> = memo(
  ({ mouseY, page }) => {
    return (
      <>
        <div className='flex w-full flex-col fill-foreground py-4 [&>a]:my-2 [&>div]:my-2'>
          {appRoutes.map((R) => (
            <Link
              href={`/dashboard/${R.path}`}
              key={R.key}
              className={clsx(R.key === page && 'border-l-2 border-primary')}
            >
              <DockItem mouseY={mouseY} active={R.key === page}>
                <R.Icon />
              </DockItem>
            </Link>
          ))}
        </div>
      </>
    )
  },
)

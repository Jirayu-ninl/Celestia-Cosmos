import type { MotionValue } from 'framer-motion'
import { memo } from 'react'
import Link from 'next/link'
import { DockItem } from '@nexel/cosmos/ui/dock/dockItem/y.opacity'
import { Home, Search } from '@nexel/cosmos/assets/icons'

interface MenuGuestSectionProps {
  mouseY: MotionValue<number>
}

export const Guest: React.FC<MenuGuestSectionProps> = memo(({ mouseY }) => {
  return (
    <>
      <div className='flex w-full flex-col fill-foreground py-4 pl-1 [&>a]:my-2 [&>div]:my-2'>
        <Link href='/'>
          <DockItem mouseY={mouseY}>
            <Home />
          </DockItem>
        </Link>
        <DockItem mouseY={mouseY}>
          <Search />
        </DockItem>
      </div>
    </>
  )
})

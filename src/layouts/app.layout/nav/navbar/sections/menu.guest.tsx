import type { MotionValue } from 'framer-motion'
import { memo } from 'react'
import Link from 'next/link'
import { DockItem } from '../../dock'
import { Home, Search } from '@nexel/cosmos/assets/icons'

interface MenuGuestSectionProps {
  mouseX: MotionValue<number>
}

export const Guest: React.FC<MenuGuestSectionProps> = memo(({ mouseX }) => {
  return (
    <>
      <div className='flex w-full flex-col fill-foreground py-4 pl-1 [&>a]:my-2 [&>div]:my-2'>
        <Link href='/'>
          <DockItem mouseX={mouseX}>
            <Home />
          </DockItem>
        </Link>
        <DockItem mouseX={mouseX}>
          <Search />
        </DockItem>
      </div>
    </>
  )
})

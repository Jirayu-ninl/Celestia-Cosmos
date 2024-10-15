import type { MotionValue } from 'framer-motion'
import { memo } from 'react'
import { Plus } from '@components/icons'
import { DockItem } from '@nexel/cosmos/ui/dock/dockItem/y.opacity'

interface MenuSectionProps {
  mouseY: MotionValue<number>
}

export const Stash: React.FC<MenuSectionProps> = memo(({ mouseY }) => {
  return (
    <>
      <div className='flex w-full grow flex-col items-center fill-foreground [&>a]:my-2 [&>div]:my-2'>
        <DockItem
          mouseY={mouseY}
          height={32}
          className='flex w-8 cursor-pointer items-center justify-center rounded-md bg-foreground/20'
        >
          <Plus />
        </DockItem>
      </div>
    </>
  )
})

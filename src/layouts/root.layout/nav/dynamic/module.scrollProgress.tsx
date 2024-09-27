import { motion } from 'framer-motion'
import { DynamicNavProgress } from '@/store'

import { Up } from '@components/icons'

interface ScrollProgressModuleProps {
  dataState: DynamicNavProgress
}

export const ScrollProgressModule: React.FC<ScrollProgressModuleProps> = ({
  dataState: _dataState,
}) => {
  return (
    <>
      <motion.div
        className='relative flex aspect-square cursor-pointer p-1 [&:hover_circle]:fill-foreground/[0.4] [&_circle]:fill-foreground/[0.07]'
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      >
        <Up className='absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2' />
        <svg
          className='h-full w-full -rotate-90 stroke-primary'
          viewBox='0 0 90 90'
        >
          <motion.circle
            r='42'
            cx='45'
            cy='45'
            rotate={45}
            className='Anim'
            // fill='hsl(var(--foreground) / 0.07)'
            strokeWidth={6}
            pathLength={_dataState.motionValue}
          />
        </svg>
      </motion.div>
    </>
  )
}

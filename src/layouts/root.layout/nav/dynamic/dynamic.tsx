import type { MotionValue } from 'framer-motion'
import { memo } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
// import { useShallow } from 'zustand/react/shallow'
import { useUiState, CURSOR } from '@/store'
// import { Filter as FilterIcon } from '@nexel/cosmos/assets/icons'
import { RenderModule } from './renderModule'

interface DynamicNavModulesProps {
  _setCursor: (c: CURSOR | undefined) => void
  mouseX: MotionValue<number>
}

export const DynamicNavModules: React.FC<DynamicNavModulesProps> = memo(
  ({ _setCursor, mouseX }) => {
    const _dynamicNav = useUiState((st) => st.dynamicNav)

    if (_dynamicNav.length === 0) {
      return null
    }

    return (
      <>
        <div
          className={clsx(
            'hidden grow items-center justify-end rounded-md border border-foreground/[0.07] bg-foreground/[0.05] shadow-md backdrop-blur-md md:flex',
            _dynamicNav.length === 1 ? 'ml-2' : 'ml-2 px-2',
          )}
        >
          {/* <div className='relative aspect-square h-full cursor-pointer fill-foreground p-1 md:hidden'>
            <div
              className='flex h-full w-full rounded-full bg-foreground/10'
              onClick={() => setDynNavSwitchMobile((state) => !state)}
            >
              <FilterIcon className='my-auto h-1/2 w-1/2' />
            </div>
          </div> */}

          <motion.div className='flex h-full items-end fill-foreground'>
            {_dynamicNav.map((module) => (
              <RenderModule
                module={module}
                _setCursor={_setCursor}
                key={module.type}
                mouseX={mouseX}
              />
            ))}
          </motion.div>
        </div>
      </>
    )
  },
)

import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'
// import { useShallow } from 'zustand/react/shallow'
import { useUiState, CURSOR } from '@/store'

export function MoreSection({ _dark }: { _dark: boolean }) {
  const _setCursor = useUiState((st) => st.setCursor)
  const { animParent, animChildren } = {
    animParent: (delay: number) => ({
      hidden: { visibility: 'hidden', y: 100 },
      show: {
        visibility: 'visible',
        y: 0,
        transition: {
          staggerChildren: delay,
        },
      },
    }),
    animChildren: {
      hidden: { visibility: 'hidden', y: 100 },
      show: { visibility: 'visible', y: 0 },
    },
  }

  return (
    <motion.div
      variants={animParent(0.2) as any}
      initial='hidden'
      animate='show'
      className='flex h-full w-full flex-col items-center justify-center'
    >
      <motion.h3
        variants={animChildren as any}
        className='text-primary-0 xxl:text-4xl text-base font-semibold uppercase lg:text-3xl'
      >
        Anything else?
      </motion.h3>
      <motion.div
        variants={animChildren as any}
        className='flex flex-col items-center justify-center'
        onMouseEnter={() => _setCursor(CURSOR.LOGO)}
        onMouseMove={() => _setCursor(CURSOR.LOGO)}
        onMouseLeave={() => _setCursor(undefined)}
        onClick={() => _setCursor(undefined)}
      >
        <Link
          href='about/skills'
          className={clsx(
            'Anim-2 AnimOpacity-40 AnimScale-sm xxl:text-10xl text-5xl font-bold uppercase lg:text-8xl',
            _dark ? 'text-outline-dark' : 'text-outline',
          )}
        >
          My skills?
        </Link>
        <Link
          href='/project'
          className={clsx(
            'Anim-2 AnimOpacity-40 AnimScale-sm xxl:text-10xl text-5xl font-bold uppercase lg:text-8xl',
            _dark ? 'text-outline-dark' : 'text-outline',
          )}
        >
          projects
        </Link>
      </motion.div>
    </motion.div>
  )
}

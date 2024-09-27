'use client'
import { motion } from 'framer-motion'
import { useUiState, CURSOR } from '@/store'
import clsx from 'clsx'
import { useShallow } from 'zustand/react/shallow'

function Title() {
  const [_dark, _setCursor] = useUiState(
    useShallow((st) => [st.dark, st.setCursor]),
  )

  const TittleText = ['T', 'h', 'e', 'I', 'c', 'e', 'J', 'i']
  return (
    <div className='absolute bottom-[65%] left-1/2 flex -translate-x-1/2 flex-col items-center xl:bottom-0'>
      <motion.h3
        initial={{ visibility: 'hidden', y: 50 }}
        animate={{ visibility: 'hidden', y: 50 }}
        className='text-quaternary-2 dark:text-primary-0 text-xs font-semibold uppercase md:text-xl lg:text-2xl xl:text-3xl'
      >
        Just called
      </motion.h3>
      <div
        className={clsx(
          'page-home-mainTEXT pointer-events-auto flex cursor-pointer',
          _dark ? 'textHoverStroke-dark' : 'textHoverStroke',
        )}
        onMouseEnter={() => {
          _setCursor(CURSOR.LOGO)
        }}
        onMouseLeave={() => {
          _setCursor(undefined)
        }}
      >
        {TittleText.map((v, i) => (
          <motion.h1
            initial={{ visibility: 'hidden', y: i % 2 === 0 ? 50 : -50 }}
            animate={{ visibility: 'hidden', y: 0 }}
            transition={{ delay: i * 0.2 }}
            key={i}
          >
            {v}
          </motion.h1>
        ))}
      </div>
    </div>
  )
}

export default Title

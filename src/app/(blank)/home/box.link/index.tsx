'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useShallow } from 'zustand/shallow'
import { useUiState } from '@/store'
import { routes } from '@routes'
import { Sun, Moon } from '@components/icons'

export const LinkBox = () => {
  const [_dark, _onToggleDark] = useUiState(
    useShallow((st) => [st.dark, st.onToggleDark]),
  )
  return (
    <>
      <div className='Anim relative flex flex-col rounded-[2rem] bg-foreground/5 p-8 opacity-50 hover:opacity-100'>
        <ul className='space-y-2 text-5xl xl:text-4xl 2xl:space-y-3 2xl:text-5xl el:text-8xl'>
          {routes.map((item) => (
            <motion.li
              key={item.title}
              className='Anim font-bold opacity-40 hover:text-primary hover:opacity-100'
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <Link href={item.path}>{item.title}</Link>
            </motion.li>
          ))}
        </ul>
        <div
          className='Anim Anim absolute bottom-2 right-2 h-16 w-16 cursor-pointer rounded-full bg-background p-4 hover:bg-primary hover:text-background'
          onClick={() => _onToggleDark()}
        >
          <AnimatePresence mode='wait'>
            {_dark && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
              >
                <Sun className='h-8 w-8' />
              </motion.div>
            )}
            {!_dark && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
              >
                <Moon className='h-8 w-8' />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

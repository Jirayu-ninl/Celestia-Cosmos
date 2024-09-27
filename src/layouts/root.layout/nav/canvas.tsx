'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useShallow } from 'zustand/react/shallow'

import { useUiState, NAV_ACTION, CURSOR } from '@/store'
import { routes } from '@routes'
import { navCanvas as CSS } from './styles'

const NavCanvas = () => {
  const [_dark, _setCursor, _navAction, _onClearNavAction] = useUiState(
    useShallow((st) => [
      st.dark,
      st.setCursor,
      st.navAction,
      st.onClearNavAction,
    ]),
  )

  const [MenuHover, setMenuHover] = useState('')

  const Router = useRouter()

  const handleLink = (url: string) => {
    _onClearNavAction()
    _setCursor(undefined)
    setTimeout(() => {
      setMenuHover('')
      Router.push(url)
    }, 1000)
  }

  // Motion
  const parent = {
    animate: { transition: { staggerChildren: 0.3, delayChildren: 0 } },
  }

  const titleSlideUp = {
    initial: { y: 1000 },
    animate: { y: 0 },
  }

  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  return (
    <>
      <AnimatePresence>
        {_navAction === NAV_ACTION.MENU_CANVAS && (
          <div className='fixed left-0 top-4 z-70 h-dvh w-dvw overflow-hidden px-5 pb-8'>
            <motion.div
              initial={{ y: '-100%' }}
              exit={{ y: '-100%' }}
              animate={{ y: 0 }}
              key='Nav_Canvas'
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              className='relative h-full overflow-hidden rounded-md bg-white/20 shadow-xl backdrop-blur-lg dark:bg-black/20'
            >
              <div className='absolute flex h-full w-full items-center justify-center'>
                <motion.div
                  variants={parent}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                >
                  {routes.map((route: (typeof routes)[0], id: number) => (
                    <motion.a
                      className={CSS.CanvasMenuItem}
                      key={id}
                      onClick={() => handleLink(`${route.path}`)}
                      onMouseEnter={() => {
                        _setCursor(CURSOR.GO), setMenuHover(route.title)
                      }}
                      onMouseLeave={() => {
                        _setCursor(undefined), setMenuHover('')
                      }}
                      variants={titleSlideUp}
                      transition={transition}
                    >
                      <motion.h6>0{id + 1}</motion.h6>
                      <motion.h1>{route.title}</motion.h1>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
              <div className={CSS.bgText}>
                <AnimatePresence>
                  {MenuHover && (
                    <>
                      <motion.h1
                        initial={{ x: '-20%', opacity: 0 }}
                        exit={{ x: '-20%', opacity: 0 }}
                        animate={{ x: MenuHover ? 0 : '-20%', opacity: 0.03 }}
                        transition={{
                          duration: 0.8,
                          ease: [0.6, 0.05, 0.01, 0.9],
                        }}
                      >
                        {MenuHover} {MenuHover}
                      </motion.h1>
                      <motion.h1
                        initial={{ x: '-40%', opacity: 0 }}
                        exit={{ x: '-40%', opacity: 0 }}
                        animate={{
                          x: MenuHover ? '40%' : '-40%',
                          opacity: 0.03,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.1,
                          ease: [0.6, 0.05, 0.01, 0.9],
                        }}
                      >
                        {MenuHover} {MenuHover}
                      </motion.h1>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export { NavCanvas }

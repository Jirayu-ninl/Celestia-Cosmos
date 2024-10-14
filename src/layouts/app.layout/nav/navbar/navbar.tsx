'use client'

import type { Session } from '@types'
import { useRef, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import clsx from 'clsx'
import { useShallow } from 'zustand/react/shallow'

import { useOnClickOutside } from '@nexel/nextjs/libs/hooks/events'
import { useUiState } from '@/store'
import { appRoutes, APP_ROUTES } from '@routes'
import * as Section from './sections'

interface NavBarProps {
  session: Session | null
}

export const NavBar: React.FC<NavBarProps> = ({ session }) => {
  const [
    _nav,
    _dark,
    _onToggleDark,
    _audio,
    _onToggleAudio,
    _navAction,
    _onToggleNavAction,
    _onClearNavAction,
    _modal,
    _onToggleModal,
  ] = useUiState(
    useShallow((st) => [
      st.nav,
      st.dark,
      st.onToggleDark,
      st.audio,
      st.onToggleAudio,
      st.navAction,
      st.onToggleNavAction,
      st.onClearNavAction,
      st.modal,
      st.onToggleModal,
    ]),
  )
  const _setCursor = useUiState((st) => st.setCursor)
  const $navContainer = useRef(null)
  useOnClickOutside($navContainer, () => _onClearNavAction())

  const mouseX = useRef(useMotionValue(Infinity)).current

  const [page, setPage] = useState<APP_ROUTES>(APP_ROUTES.DASHBOARD)
  const pathname = usePathname()
  useEffect(() => {
    const reqPath = pathname.split('/dashboard/')[1] ?? pathname
    const matchedRoute = appRoutes.find((route) => reqPath.includes(route.path))

    if (matchedRoute) {
      setPage(matchedRoute.key)
    } else {
      setPage(APP_ROUTES.DASHBOARD)
    }
  }, [pathname])

  return (
    <>
      <AnimatePresence>
        {_nav && (
          <motion.div
            initial={{ y: 0, x: -150 }}
            animate={{ y: 0, x: 0 }}
            exit={{ y: 0, x: -150 }}
            className='fixed left-0 top-0 z-80 h-dvh px-4 py-5'
            ref={$navContainer}
          >
            <motion.div
              className='relative flex h-full w-12 flex-col rounded-md dark:shadow-xl el:w-16'
              style={{ perspective: 1 }}
              onMouseMove={(e) => mouseX.set(e.pageY)}
              onTap={() => mouseX.set(Infinity)}
              onMouseLeave={() => mouseX.set(Infinity)}
            >
              <div className='flex min-h-14 w-full flex-col items-center rounded-t-md bg-black/[0.07] shadow-md backdrop-blur-md dark:bg-white/[0.07]'>
                <Section.Logo
                  _setCursor={_setCursor}
                  _onToggleModal={_onToggleModal}
                />
                {session ? (
                  <Section.Menu.WithSession mouseX={mouseX} page={page} />
                ) : (
                  <Section.Menu.Guest mouseX={mouseX} />
                )}
              </div>
              <div className='flex grow flex-col items-center justify-end rounded-b-md border border-foreground/[0.07] shadow-md backdrop-blur-md'>
                {session && <Section.Stash mouseX={mouseX} />}
                <Section.User mouseX={mouseX} session={session} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

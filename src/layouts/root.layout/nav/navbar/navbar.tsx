'use client'

import type { Session, Providers } from '@types'
import { useRef } from 'react'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import { useShallow } from 'zustand/react/shallow'

import { useOnClickOutside } from '@nexel/nextjs/libs/hooks/events'
import { useUiState } from '@/store'
import * as Section from './sections'
import { NavAction } from '../action'
import { DynamicNavModules, UserModule } from '../dynamic'

// import { UserMockData as session } from '@/mocks/user.mock'

interface NavbarProps {
  session: Session | null
  providers: Providers | null
}

export const NavBar: React.FC<NavbarProps> = ({ session, providers }) => {
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

  return (
    <>
      <AnimatePresence>
        {_nav && (
          <motion.div
            initial={{ y: 150, x: '50%' }}
            animate={{ y: 0, x: '50%' }}
            exit={{ y: 150, x: '50%' }}
            className='fixed bottom-0 right-1/2 z-80 px-5 py-4'
            ref={$navContainer}
          >
            <motion.div
              className='relative flex h-12 rounded-md dark:shadow-xl el:h-16'
              style={{ perspective: 1 }}
              whileHover={{ scale: 1.05, perspective: 1, z: 0 }}
              onMouseMove={(e) => mouseX.set(e.pageX)}
              onTap={() => mouseX.set(Infinity)}
              onMouseLeave={() => mouseX.set(Infinity)}
            >
              <div className='flex h-full min-w-14 items-center rounded-l-md bg-black/[0.07] shadow-md backdrop-blur-md dark:bg-white/[0.07]'>
                <Section.Logo
                  _setCursor={_setCursor}
                  _onToggleModal={_onToggleModal}
                />
                <Section.Settings
                  _setCursor={_setCursor}
                  // _onToggleNavAction={_onToggleNavAction}
                  _onClearNavAction={_onClearNavAction}
                  mouseX={mouseX}
                />
              </div>
              <div className='flex grow items-center justify-end rounded-r-md border border-foreground/[0.07] px-4 shadow-md backdrop-blur-md'>
                <Section.Shortcut
                  _navAction={_navAction}
                  _setCursor={_setCursor}
                  _onToggleNavAction={_onToggleNavAction}
                  _onToggleModal={_onToggleModal}
                  mouseX={mouseX}
                />
              </div>
              <UserModule
                session={session}
                _onToggleNavAction={_onToggleNavAction}
                _setCursor={_setCursor}
              />
              <DynamicNavModules mouseX={mouseX} _setCursor={_setCursor} />
            </motion.div>
            <NavAction
              action={_navAction}
              session={session}
              providers={providers}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

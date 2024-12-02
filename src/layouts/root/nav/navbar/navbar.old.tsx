'use client'

import type { Session, Providers } from 'types'
import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { useShallow } from 'zustand/shallow'

import { useOnClickOutside } from '@core/hooks/events'
import { useUiState, NAV, NAV_ACTION, MODAL, CURSOR } from '@/store'
import { IceJiLogo } from '@components/logo/IceJi'
import { Icon } from '@cosmos/assets'
import { navAnimationConfig, iconAnimationConfig } from '../animations/config'
import { UserInfo } from '../user'
import { NavAction } from '../action'
import { DynamicNavModules, UserModules } from '../dynamic'

interface NavbarProps {
  session: Session | null
  providers: Providers | null
}

export const NavBar: React.FC<NavbarProps> = ({ session, providers }) => {
  const [
    _dark,
    _onToggleDark,
    _audio,
    _onToggleAudio,
    _setCursor,
    _nav,
    _navAction,
    _onToggleNavAction,
    _onClearNavAction,
    _modal,
    _onToggleModal,
  ] = useUiState(
    useShallow((st) => [
      st.dark,
      st.onToggleDark,
      st.audio,
      st.onToggleAudio,
      st.setCursor,
      st.nav,
      st.navAction,
      st.onToggleNavAction,
      st.onClearNavAction,
      st.modal,
      st.onToggleModal,
    ]),
  )
  const $navContainer = useRef(null)
  useOnClickOutside($navContainer, () => _onClearNavAction())

  const navAnimation = navAnimationConfig(_nav as NAV)
  const iconAnimation = iconAnimationConfig(_nav as NAV)

  return (
    <>
      <AnimatePresence>
        {_nav && (
          <motion.div
            initial={navAnimation.initial}
            animate={navAnimation.animate}
            exit={navAnimation.exit}
            className={clsx(
              'fixed z-80',
              _nav === NAV.BOTTOM && 'bottom-0 left-1/2 px-5 py-4',
              _nav === NAV.TOP && 'left-1/2 top-0 px-5 py-4',
              _nav === NAV.LEFT && 'left-0 top-0 px-4 py-5',
              _nav === NAV.RIGHT && 'right-0 top-0 px-4 py-5',
            )}
            ref={$navContainer}
          >
            <NavAction
              action={_navAction}
              _nav={_nav}
              session={session}
              providers={providers}
            />
            <motion.div
              className={clsx(
                'bg-back/[0.05] relative flex rounded-md dark:shadow-xl',
                (_nav === NAV.TOP || _nav === NAV.BOTTOM) && 'h-12 el:h-16',
                (_nav === NAV.LEFT || _nav === NAV.RIGHT) &&
                  'w-12 flex-col el:w-16',
              )}
              style={{ perspective: 1 }}
              whileHover={
                _nav === NAV.TOP || _nav === NAV.BOTTOM
                  ? { scale: 1.05, perspective: 1, z: 0 }
                  : _nav === NAV.LEFT || _nav === NAV.RIGHT
                    ? { scale: 1.05, y: 8 }
                    : {}
              }
            >
              <div
                className={clsx(
                  'flex items-center bg-black/[0.07] shadow-md backdrop-blur-md dark:bg-white/[0.07]',
                  (_nav === NAV.TOP || _nav === NAV.BOTTOM) &&
                    'h-full min-w-14 rounded-l-md',
                  (_nav === NAV.LEFT || _nav === NAV.RIGHT) &&
                    'min-h-14 w-full flex-col rounded-t-md',
                )}
              >
                <div
                  className={clsx(
                    'Anim flex cursor-pointer items-center bg-primary p-2 lg:p-2 el:p-3',
                    (_nav === NAV.TOP || _nav === NAV.BOTTOM) &&
                      'h-full w-14 rounded-l-md',
                    (_nav === NAV.LEFT || _nav === NAV.RIGHT) &&
                      'h-14 w-full rounded-t-md',
                  )}
                  onMouseEnter={() => {
                    _setCursor(CURSOR.LOGO)
                  }}
                  onMouseLeave={() => {
                    _setCursor(undefined)
                  }}
                  onClick={() => {
                    _onToggleModal(MODAL.APP_INFO)
                    _setCursor(undefined)
                  }}
                >
                  <IceJiLogo />
                </div>
                <div
                  className={clsx(
                    'flex items-center fill-foreground',
                    (_nav === NAV.TOP || _nav === NAV.BOTTOM) &&
                      'h-full px-4 [&>div]:mx-2 [&>div]:h-full',
                    (_nav === NAV.LEFT || _nav === NAV.RIGHT) &&
                      'w-full flex-col py-4 [&>div]:my-2 [&>div]:w-full',
                  )}
                >
                  {!session ? (
                    <motion.div
                      className='cursor-pointer'
                      animate={iconAnimation.animate}
                      whileHover={iconAnimation.whileHover}
                      onClick={() => {
                        _onToggleNavAction(NAV_ACTION.USER)
                        _setCursor(undefined)
                      }}
                    >
                      <Icon.User />
                    </motion.div>
                  ) : (
                    <UserInfo
                      session={session}
                      _onToggleNavAction={_onToggleNavAction}
                      _setCursor={_setCursor}
                    />
                  )}

                  <motion.div
                    className='cursor-pointer'
                    animate={iconAnimation.animate}
                    whileHover={iconAnimation.whileHover}
                    onClick={() => {
                      _onToggleNavAction(NAV_ACTION.CART)
                      _setCursor(undefined)
                    }}
                  >
                    <Icon.Cart />
                  </motion.div>
                </div>
              </div>
              <div
                className={clsx(
                  'flex grow items-center justify-end border border-foreground/[0.07] shadow-md backdrop-blur-md',
                  (_nav === NAV.TOP || _nav === NAV.BOTTOM) &&
                    'rounded-r-md px-4',
                  (_nav === NAV.LEFT || _nav === NAV.RIGHT) &&
                    'flex-col rounded-b-md py-4',
                )}
              >
                <motion.div
                  className={clsx(
                    'flex fill-foreground',
                    (_nav === NAV.TOP || _nav === NAV.BOTTOM) &&
                      'h-full [&>div]:mx-2 [&>div]:h-full',
                    (_nav === NAV.LEFT || _nav === NAV.RIGHT) &&
                      'w-full flex-col [&>div]:my-2 [&>div]:w-full',
                  )}
                >
                  {/* <motion.div
                    className='cursor-pointer'
                    animate={iconAnimation.animate}
                    whileHover={iconAnimation.whileHover}
                    onClick={() => {
                      _onToggleNavAction(NAV_ACTION.SETTINGS)
                      _setCursor(undefined)
                    }}
                  >
                    <Icon.Settings />
                  </motion.div> */}
                  <motion.div
                    className='cursor-pointer'
                    animate={iconAnimation.animate}
                    whileHover={iconAnimation.whileHover}
                    onClick={() => {
                      _onToggleAudio()
                      _onClearNavAction()
                      _setCursor(undefined)
                    }}
                  >
                    {_audio ? <Icon.SoundOn /> : <Icon.SoundOff />}
                  </motion.div>
                  <motion.div
                    className='cursor-pointer'
                    animate={iconAnimation.animate}
                    whileHover={iconAnimation.whileHover}
                    onClick={() => {
                      _onToggleDark()
                      _onClearNavAction()
                      _setCursor(undefined)
                    }}
                  >
                    {_dark ? <Icon.MoonStar /> : <Icon.Sun />}
                  </motion.div>
                  <motion.div
                    className='cursor-pointer'
                    animate={iconAnimation.animate}
                    whileHover={iconAnimation.whileHover}
                    onClick={() => {
                      _onToggleNavAction(NAV_ACTION.MENU_CANVAS)
                      _setCursor(undefined)
                    }}
                  >
                    {_navAction === NAV_ACTION.MENU_CANVAS ? (
                      <Icon.Close />
                    ) : (
                      <Icon.Menu />
                    )}
                  </motion.div>
                </motion.div>
              </div>
              <UserModules
                session={session}
                _nav={_nav}
                _onToggleNavAction={_onToggleNavAction}
                _setCursor={_setCursor}
              />
              <DynamicNavModules _nav={_nav} _setCursor={_setCursor} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

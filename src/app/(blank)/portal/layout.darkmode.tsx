'use client'

import { useUiState } from '@/store'
import { useShallow } from 'zustand/shallow'
import { MoonStar as MoonStarIcon, Sun as SunIcon } from '@cosmos/assets/icons'

export const DarkModeSwitch = () => {
  const [_dark, _onToggleDark] = useUiState(
    useShallow((st) => [st.dark, st.onToggleDark]),
  )
  return (
    <>
      <div
        className='Anim AnimOpacity-60 absolute right-4 top-4 cursor-pointer fill-foreground'
        onClick={() => _onToggleDark()}
      >
        <div className='h-6 w-6'>{!_dark ? <MoonStarIcon /> : <SunIcon />}</div>
      </div>
    </>
  )
}

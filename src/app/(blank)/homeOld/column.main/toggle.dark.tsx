'use client'

import { useUiState } from '@/store'
import { Moon } from '@nexel/cosmos/assets/icons/moon'
import { useShallow } from 'zustand/shallow'

export const ToggleDark = () => {
  const _onToggleDark = useUiState(useShallow((st) => st.onToggleDark))
  return (
    <>
      <div
        className='h-6 w-6 cursor-pointer fill-black dark:fill-white xl:hidden el:h-8 el:w-8'
        onClick={() => {
          _onToggleDark()
        }}
      >
        <Moon />
      </div>
    </>
  )
}

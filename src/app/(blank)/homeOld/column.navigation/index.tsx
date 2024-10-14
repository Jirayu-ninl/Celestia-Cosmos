'use client'

import { useShallow } from 'zustand/shallow'
import { Moon } from '@nexel/cosmos/assets/icons/moon'
import { useUiState } from '@/store'
import { NavPage } from './nav.page'
import { NavApp } from './nav.app'

export const ColumnNavigate = () => {
  const _onToggleDark = useUiState(useShallow((st) => st.onToggleDark))

  return (
    <>
      <div className='flex h-[25dvh] w-full items-end justify-between xl:h-full xl:flex-col xl:items-start xl:justify-start xl:px-8 xl:py-4'>
        <div className='flex items-start justify-between xl:w-full'>
          <NavPage />
          <div
            className='hidden h-6 w-6 cursor-pointer fill-black dark:fill-white xl:block el:h-8 el:w-8'
            onClick={() => {
              _onToggleDark()
            }}
          >
            <Moon />
          </div>
        </div>
        <NavApp />
        {/* <h1>Main Content</h1>
        <button>call to action</button> */}
      </div>
    </>
  )
}

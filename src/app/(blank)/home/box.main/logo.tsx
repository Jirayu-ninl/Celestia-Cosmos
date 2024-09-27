'use client'

// import { useShallow } from 'zustand/react/shallow'
import { useUiState, MODAL } from '@/store'
import { IceJiLogo } from '@components/logo/IceJi'

export const Logo = () => {
  const _onToggleModal = useUiState((st) => st.onToggleModal)
  return (
    <>
      <div
        className='Anim absolute bottom-8 right-8 hidden h-80 w-80 cursor-pointer fill-foreground opacity-10 hover:fill-primary hover:opacity-100 xl:block'
        onClick={() => _onToggleModal(MODAL.APP_INFO)}
      >
        <IceJiLogo />
      </div>
    </>
  )
}

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useShallow } from 'zustand/react/shallow'
import { useUiState, MODAL } from '@/store'

export const Shortcuts = () => {
  const [_modal, _onToggleModal] = useUiState(
    useShallow((st) => [st.modal, st.onToggleModal]),
  )
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // 'Search'
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        _onToggleModal(MODAL.SEARCH)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [_modal, _onToggleModal, router])
  return null
}

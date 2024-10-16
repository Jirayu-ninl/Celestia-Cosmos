'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUiState, MODAL } from '@/store'

const KeyboardController = () => {
  const _onToggleModal = useUiState((st) => st.onToggleModal)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // 'Search'
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        _onToggleModal(MODAL.SEARCH)
      }
      // 'App Info'
      if (e.key === 'i' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        _onToggleModal(MODAL.APP_INFO)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [_onToggleModal, router])
  return null
}

export { KeyboardController }

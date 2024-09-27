'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { useUiState } from '@/store'

export const Client = () => {
  const _setAudio = useUiState((state) => state.setAudio)
  const _setCursor = useUiState((state) => state.setCursor)

  const routerOn = useSearchParams().get('routerOn')
  const target = useSearchParams().get('target')

  const router = useRouter()

  useEffect(() => {
    if (routerOn) {
      const Go = () => {
        if (!target) return
        router.prefetch(target)
        setTimeout(() => {
          _setAudio(true)
          _setCursor(undefined)
          router.push(target)
        }, 600)
        _setCursor(undefined)
      }
      Go()
    }
  }, [
    _setAudio,
    _setCursor,
    routerOn,
    target,
    router,
  ])

  return <></>
}

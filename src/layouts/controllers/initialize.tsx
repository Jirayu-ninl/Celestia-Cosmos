'use client'

import { useEffect } from 'react'
// import { useShallow } from 'zustand/react/shallow'
import { useAppState } from '@/store'
import Console from './initialize.console'

export const Initialize = () => {
  const _onAppInit = useAppState((st) => st.onAppInit)

  useEffect(() => {
    console.log(Console)
    _onAppInit()
  }, [])

  return null
}

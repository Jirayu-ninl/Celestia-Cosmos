'use client'

import { useEffect } from 'react'
// import { useShallow } from 'zustand/shallow'
import { useAppState } from '@/store'
import { trpc } from '@trpc'
import Console from './initialize.console'

export const Initialize = () => {
  const _onAppInit = useAppState((st) => st.onAppInit)
  const { data: searchDataIndex } = trpc.web.search.getSearchIndex.useQuery()

  useEffect(() => {
    console.log(Console)
  }, [])

  useEffect(() => {
    if (searchDataIndex && searchDataIndex.success) {
      _onAppInit({ searchDataIndex: searchDataIndex.data })
    }
  }, [searchDataIndex])

  return null
}

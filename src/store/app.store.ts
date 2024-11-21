import { AppState } from './AppState'
import { create } from 'zustand'

import { getGPUTier } from 'detect-gpu'

export const useAppState = create<AppState>((set, get) => ({
  gpuTier: null,
  searchDataIndex: null,
  onAppInit: async ({ searchDataIndex }) => {
    const gpuTier = await getGPUTier()
    set({ gpuTier: gpuTier, searchDataIndex })
    console.log({ status: 'set GPU complete', GPUdata: gpuTier })
  },
}))

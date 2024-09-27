import { AppState } from './AppState'
import { create } from 'zustand'

import { getGPUTier } from 'detect-gpu'

export const useAppState = create<AppState>((set, get) => ({
  gpuTier: null,
  onAppInit: async () => {
    const gpuTier = await getGPUTier()
    set({ gpuTier: gpuTier })
    console.log({ status: 'set GPU complete', GPUdata: gpuTier })
  },
}))

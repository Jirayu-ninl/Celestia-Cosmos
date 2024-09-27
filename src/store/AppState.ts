import type { TierResult } from 'detect-gpu'

export interface AppState {
  gpuTier: TierResult | null
  onAppInit: () => Promise<void>
}

import type { TierResult } from 'detect-gpu'

type SearchDataItem = {
  title: string
  path: string
}
export interface AppState {
  gpuTier: TierResult | null
  searchDataIndex: SearchDataItem[] | null
  onAppInit: ({
    searchDataIndex,
  }: {
    searchDataIndex: SearchDataItem[]
  }) => Promise<void>
}

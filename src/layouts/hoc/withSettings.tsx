'use client'

import { useShallow } from 'zustand/react/shallow'
import { useUiState } from '@/store'

export const withSettings = (Component: React.FC<any>) => {
  const [_onClearModal, _onClearNavAction] = useUiState(
    useShallow((st) => [st.onClearModal, st.onClearNavAction]),
  )
  const _clearUi = () => {
    _onClearModal()
    _onClearNavAction()
  }
  return (props: any) => {
    return <Component _clearUi={_clearUi} {...props} />
  }
}

'use client'

import { useEffect } from 'react'
import { useUserState, User } from '@/store'

export const ClearUserStore = () => {
  const _onClearUser = useUserState((state) => state.onClearUser)
  useEffect(() => {
    _onClearUser()
  }, [_onClearUser])
  return null
}

export const SetUserStore = ({ user }: { user: User }) => {
  const _onSetUser = useUserState((state) => state.onSetUser)
  useEffect(() => {
    _onSetUser(user)
  }, [_onSetUser])

  return null
}

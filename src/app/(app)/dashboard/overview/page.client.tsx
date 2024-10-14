'use client'

import { useUserState } from '@/store'

export const Client = () => {
  const _user = useUserState((st) => st.user)
  return (
    <>
      <h2 className='text-6xl font-light'>
        Welcome, {_user ? _user.name : 'New user'}
      </h2>
    </>
  )
}

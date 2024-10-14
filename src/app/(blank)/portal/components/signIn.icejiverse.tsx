'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import clsx from 'clsx'
import { trpc } from '@trpc'
import { form } from '@/utils'

const SignInIceJiVerse = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  // TODO: feat/auth: Remember me function (method: set session cookies expire time)
  const [remember_me, setRemember_me] = useState<boolean>(false)

  const { mutateAsync } = trpc.user.portal.signin.useMutation({
    onSuccess(data) {
      if (data && !data.success && data.message) {
        toast.error('Error: ' + data.message)
        return
      }
      toast.success('Sign in complete')
      router.refresh()
      // router.push('/dashboard')
    },
    onError: () => {
      toast.error(`Error: Connection failed`)
      setIsLoading(false)
      return
    },
  })

  const { formChange, formSubmit } = form({
    initial: {
      email: '',
      password: '',
    },
    onSubmit: async (f) => {
      setIsLoading(true)
      f.email &&
        f.password &&
        (await mutateAsync({ email: f.email, password: f.password }))
    },
    onError: () => {
      toast.error("Error: Can't set session")
      setIsLoading(false)
      throw new Error('AUTH: Set session failed')
    },
  })

  return (
    <>
      <div
        className={clsx(
          'relative ml-2 h-full p-8',
          isLoading && 'pointer-events-none',
        )}
      >
        <h3 className='text-2xl font-semibold uppercase'>Sign in</h3>
        <form
          className={clsx(
            'Form flex flex-col pt-6 [&>input]:mb-2 [&>input]:rounded-md',
            isLoading && 'pointer-events-none opacity-30',
          )}
          onSubmit={formSubmit}
        >
          <input
            type='email'
            name='email'
            placeholder='Email'
            required={true}
            onChange={formChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            required={true}
            onChange={formChange}
          />
          <button
            className='Anim AnimOpacity-60 mt-4 rounded-md bg-foreground/20 py-1'
            type='submit'
          >
            {isLoading ? 'Loading...' : 'Sign in'}
          </button>
          <div className='my-3'>
            <input
              type='checkbox'
              className='Form-checkbox mr-2'
              title='remember me'
              checked={remember_me}
              onChange={() => setRemember_me(!remember_me)}
            />
            <label className='flex'>
              <p className='-ml-1 -mt-px text-xs'>Remember me</p>
            </label>
          </div>
        </form>
        <div className='my-4 flex w-full justify-center'>
          <div className='my-auto h-px w-12 bg-white/30' />
          <p className='px-3 text-xs'>or Continue with</p>
          <div className='my-auto h-px w-12 bg-white/30' />
        </div>
        {children}
      </div>
      <Link
        href='/portal/signup'
        className={clsx(isLoading && 'pointer-events-none')}
      >
        <p className='Anim AnimOpacity-40 mr-2 cursor-pointer pb-4 text-center text-xs md:mt-1 md:pb-0 md:text-right'>
          Not have an Account?
        </p>
      </Link>
    </>
  )
}

export { SignInIceJiVerse }

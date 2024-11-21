/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import clsx from 'clsx'
import { trpc } from '@trpc'
import {
  email as emailValidator,
  password as passwordValidator,
} from '@nexel/nextjs/utils/validator'
import { form } from '@/utils'

const SignUpIceJiVerse = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  // const log = clientLog()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (window.location.hash === '#_=_') {
      setIsLoading(true)
    }
  }, [window.location.hash, setIsLoading, isLoading])

  const { mutateAsync } = trpc.user.portal.signup.useMutation({
    onMutate: () => {
      setIsLoading(true)
    },
    onSuccess(data) {
      if (data && !data.success && data.message) {
        toast.error('Error: ' + data.message)
        return
      }
      toast.success('Sign up successfully, please login')
      router.refresh()
      // router.push('/dashboard')
    },
    onError: () => {
      setIsLoading(false)
      toast.error(`Error: Connection failed`)
      return
    },
  })

  const [confirmPassword, setConfirmPassword] = useState(null)

  const { formChange, formSubmit } = form({
    initial: {
      email: '',
      password: '',
    },
    onSubmit: async (f) => {
      setIsLoading(true)
      if (emailValidator(f.email) === null) {
        toast.warn('Please enter a valid E-mail')
        return
      }
      if (f.password !== confirmPassword) {
        toast.warn('Passwords need to match!')
        return
      }
      const IsValidPassword = passwordValidator.Func(f.password)
      if (IsValidPassword.error) {
        toast.warn(IsValidPassword.msg)
        return
      }
      await mutateAsync({ email: f.email, password: f.password })
    },
    onError: () => {
      toast.error("Error: Can't sign up")
      setIsLoading(false)
      throw new Error('AUTH: Sign up failed')
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
        <h3 className='text-3xl font-semibold uppercase'>Sign up</h3>
        <form
          className={clsx(
            'Form flex flex-col pt-6 [&>input]:mb-2 [&>input]:rounded-md',
            isLoading && 'pointer-events-none opacity-30',
          )}
          onSubmit={formSubmit}
        >
          <input
            type='text'
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

          <input
            type='password'
            name='confirm_password'
            placeholder='Confirm Password'
            required={true}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />
          <button
            className='Anim AnimOpacity-60 mt-4 rounded-md bg-foreground/20 py-1'
            type='submit'
          >
            {isLoading ? 'Loading...' : 'Sign up'}
          </button>
        </form>
        <div className='my-4 flex w-full justify-center'>
          <div className='my-auto h-px w-12 bg-white/30' />
          <p className='px-3 text-xs'>or Continue with</p>
          <div className='my-auto h-px w-12 bg-white/30' />
        </div>
        {children}
      </div>
      <Link href='/portal' className={clsx(isLoading && 'pointer-events-none')}>
        <p className='mr-2 cursor-pointer pb-4 text-center text-xs md:mt-1 md:pb-0 md:text-right'>
          <span className='mr-1 opacity-40'>Have an Account?</span>
          <span className='Anim AnimOpacity-60 font-bold uppercase'>
            Sign In
          </span>
        </p>
      </Link>
    </>
  )
}

export { SignUpIceJiVerse }

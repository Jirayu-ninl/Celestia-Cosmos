/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { trpc } from '@trpc'
import {
  email as emailValidator,
  password as passwordValidator,
} from '@nexel/nextjs/utils/validator'
import { SignUp } from '@backend/auth/icejiverse'
// import { clientLog } from '@nexel/nextjs/libs/log'
import { form } from '@/utils'

const SignUpIceJiVerse = () => {
  const router = useRouter()
  // const log = clientLog()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { mutateAsync } = trpc.user.portal.signup.useMutation({
    onMutate: () => {
      setIsLoading(true)
    },
    onSuccess(data) {
      setIsLoading(false)
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
      throw new Error('AUTH: Sign up failed')
    },
  })

  return (
    <div className='Card-white-20 Border-white-40 relative ml-2 h-full rounded-lg p-8'>
      <h3 className='text-3xl font-semibold uppercase'>Sign up</h3>
      <form className='Form-white flex flex-col pt-6' onSubmit={formSubmit}>
        <input
          className='Border-white-40 rounded-md'
          type='text'
          name='email'
          placeholder='Email'
          required={true}
          onChange={formChange}
        />
        <input
          className='Border-40 mt-2 rounded-md'
          type='password'
          name='password'
          placeholder='Password'
          required={true}
          onChange={formChange}
        />

        <input
          className='Border-40 mt-2 rounded-md'
          type='password'
          name='confirm_password'
          placeholder='Confirm Password'
          required={true}
          onChange={(e: any) => setConfirmPassword(e.target.value)}
        />

        <button className='Btn-white-40 Anim AnimOpacity-60 mt-5' type='submit'>
          Submit
        </button>
        <div className='my-3 flex text-xs'>
          <p className='mr-1 opacity-60'>Have an Account?</p>
          <Link
            className='Anim cursor-pointer font-bold uppercase opacity-80 hover:opacity-100'
            href='/portal'
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  )
}

export { SignUpIceJiVerse }

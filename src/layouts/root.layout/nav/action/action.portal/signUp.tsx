import type { Dispatch } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { trpc } from '@trpc'
import {
  email as emailValidator,
  password as passwordValidator,
} from '@nexel/nextjs/utils/validator'
import { form } from '@/utils/view'

export const SignUpComponent = ({
  isLoading,
  setIsLoading,
}: {
  isLoading: boolean
  setIsLoading: Dispatch<boolean>
}) => {
  const router = useRouter()
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
    <>
      <motion.form
        className={clsx(
          'Form flex flex-col pt-4',
          isLoading && 'pointer-events-none',
        )}
        onSubmit={formSubmit}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
      >
        <input
          className={clsx('Border-40 rounded-md', isLoading && 'opacity-40')}
          type='text'
          name='email'
          placeholder='Email'
          required={true}
          onChange={formChange}
          autoComplete='one-time-code'
        />
        <input
          className={clsx(
            'Border-40 mt-2 rounded-md',
            isLoading && 'opacity-40',
          )}
          type='password'
          name='password'
          placeholder='Password'
          required={true}
          onChange={formChange}
          autoComplete='one-time-code'
        />

        <input
          className={clsx(
            'Border-40 mt-2 rounded-md',
            isLoading && 'opacity-40',
          )}
          type='password'
          name='confirm_password'
          placeholder='Confirm Password'
          required={true}
          onChange={(e: any) => setConfirmPassword(e.target.value)}
        />

        <button
          className='Anim AnimOpacity-60 mt-3 rounded-md bg-foreground/20 py-1'
          type='submit'
        >
          {isLoading ? 'Loading ...' : 'Register'}
        </button>
      </motion.form>
    </>
  )
}

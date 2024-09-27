import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { trpc } from '@trpc'
import {
  email as emailValidator,
  password as passwordValidator,
} from '@nexel/nextjs/utils/validator'
import { SignUp } from '@backend/auth/icejiverse'
import { formHandler } from '@/utils'

export const SignUpComponent = () => {
  const router = useRouter()
  const { mutateAsync, isLoading } = trpc.user.portal.signup.useMutation({
    onSuccess(data) {
      if (data && !data.success && data.message) {
        toast.error('Error: ' + data.message)
        return
      }
      toast.success('Sign up successfully, please login')
      // router.refresh()
      router.push('/dashboard')
    },
    onError: () => {
      toast.error(`Error: Connection failed`)
      return
    },
  })

  const [confirmPassword, setConfirmPassword] = useState(null)

  const { handleChange, executeForm } = formHandler({
    email: '',
    password: '',
  })
  const handleSubmit = async (e: any) =>
    executeForm(
      e,
      async (f: { email: string; password: string }, t: typeof toast) => {
        try {
          if (emailValidator(f.email) === null) {
            t.warn('Please enter a valid E-mail')
            return
          }

          if (f.password !== confirmPassword) {
            t.warn('Passwords need to match!')
            return
          }

          const IsValidPassword = passwordValidator.Func(f.password)

          if (IsValidPassword.error) {
            t.warn(IsValidPassword.msg)
            return
          }

          await mutateAsync(f)
        } catch (e) {
          t.error("Error: Can't sign up")
          throw new Error('AUTH: Sign up failed')
        }
      },
    )

  return (
    <>
      <motion.form
        className='Form-white flex flex-col pt-4'
        onSubmit={handleSubmit}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
      >
        <input
          className='Border-40 rounded-md'
          type='text'
          name='email'
          placeholder='Email'
          required={true}
          onChange={handleChange}
          autoComplete='one-time-code'
        />
        <input
          className='Border-40 mt-2 rounded-md'
          type='password'
          name='password'
          placeholder='Password'
          required={true}
          onChange={handleChange}
          autoComplete='one-time-code'
        />

        <input
          className='Border-40 mt-2 rounded-md'
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
          Register
        </button>
      </motion.form>
    </>
  )
}

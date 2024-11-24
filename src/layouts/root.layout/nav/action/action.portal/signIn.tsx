import type { Dispatch } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { trpc } from '@trpc'
import { form } from '@/utils/view'

export const SignInComponent = ({
  isLoading,
  setIsLoading,
}: {
  isLoading: boolean
  setIsLoading: Dispatch<boolean>
}) => {
  const router = useRouter()

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
      throw new Error('AUTH: Set session failed')
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
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
      >
        <input
          className={clsx('Border-40 rounded-md', isLoading && 'opacity-40')}
          type='email'
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
        <button
          className='Anim AnimOpacity-60 mt-3 rounded-md bg-foreground/20 py-1'
          type='submit'
        >
          {isLoading ? 'Loading ...' : 'Login'}
        </button>
        {/* <div className='my-3'>
          <input type='checkbox' className='Form-white-checkbox mr-2' />
          <label className='flex'>
            <p className='-mt-px text-xs'>Remember me</p>
          </label>
        </div> */}
      </motion.form>
    </>
  )
}

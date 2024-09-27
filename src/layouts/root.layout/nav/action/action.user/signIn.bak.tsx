import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { formHandler } from '@/utils'
import { trpc } from '@trpc'

export const SignInComponent = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const { mutateAsync } = trpc.user.portal.signin.useMutation({
    onSuccess(data) {
      if (data && !data.success && data.message) {
        toast.error('Error: ' + data.message)
        return
      }
      toast.success('Sign in complete')
      // router.refresh()
      router.push('/dashboard')
    },
    onError: () => {
      toast.error(`Error: Connection failed`)
      setIsLoading(false)
      return
    },
  })

  const { handleChange, executeForm } = formHandler()
  const handleSubmit = async (e: any) =>
    executeForm(
      e,
      async (f: { email: string; password: string }, t: typeof toast) => {
        try {
          setIsLoading(true)
          await mutateAsync(f)
        } catch (e) {
          t.error("Error: Can't set session")
          throw new Error('AUTH: Set session failed')
        }
      },
    )

  return (
    <>
      <motion.form
        className='Form-white flex flex-col pt-4'
        onSubmit={handleSubmit}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
      >
        <input
          className='Border-40 rounded-md'
          type='email'
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
        <button
          className='Anim AnimOpacity-60 mt-3 rounded-md bg-foreground/20 py-1'
          type='submit'
        >
          Login
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

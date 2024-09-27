'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { trpc } from '@trpc'
import { form } from '@/utils'
// import { clientLog } from '@nexel/nextjs/libs/log'

const SignInIceJiVerse = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  // const log = clientLog()

  const [isLoading, setIsLoading] = useState<boolean>(false)

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
      <div className='Card-white-20 Border-white-40 relative ml-2 h-full rounded-lg p-8'>
        <h3 className='text-2xl font-semibold uppercase'>Sign in</h3>
        <form className='Form-white flex flex-col pt-6' onSubmit={formSubmit}>
          <input
            className='Border-40 rounded-md'
            type='email'
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
          <button className='Btn-40 Anim AnimOpacity-60 mt-5' type='submit'>
            Submit
          </button>
          <div className='my-3'>
            <input
              type='checkbox'
              className='Form-white-checkbox mr-2'
              title='remember me'
            />
            <label className='flex'>
              <p className='-mt-px text-xs'>Remember me</p>
            </label>
          </div>
        </form>
        <div className='my-8 flex w-full justify-center'>
          <div className=' my-auto h-px w-12 bg-white/30' />
          <p className='px-3 text-xs'>or Continue with</p>
          <div className=' my-auto h-px w-12 bg-white/30' />
        </div>
        {children}
      </div>
      <Link href='/portal/signup'>
        <p className='Anim AnimOpacity-40 mt-1 cursor-pointer text-right text-xs'>
          Not have an Account?
        </p>
      </Link>
    </>
  )
}

export { SignInIceJiVerse }

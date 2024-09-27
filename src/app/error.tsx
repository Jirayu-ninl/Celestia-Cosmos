'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import * as Sentry from '@sentry/nextjs'

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <>
      <div className='flex h-dvh w-dvw flex-col items-center justify-center'>
        <h4 className='text-10xl font-thin text-primary'>500</h4>
        <h2 className='mt-16 text-5xl font-bold uppercase'>Oooops!</h2>
        <p className='font-light'>Internal Error has occurred</p>
        <Link
          className='Anim mt-6 rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs hover:bg-primary hover:text-black'
          href='/'
        >
          Back home
        </Link>
      </div>
    </>
  )
}

'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <div className='flex h-screen w-screen flex-col items-center justify-center'>
        <h4 className='text-primary-0 -mb-8 text-10xl font-thin'>404</h4>
        <h2 className='text-5xl font-bold uppercase'>Not Found</h2>
        <p className='font-light'>Could not find requested resource</p>
        <Link
          className='Anim border-primary-0 bg-primary-0/20 hover:bg-primary-0 mt-8 rounded-md border px-3 py-1 text-xs hover:text-black'
          href='/home'
        >
          Comeback home
        </Link>
      </div>
    </>
  )
}

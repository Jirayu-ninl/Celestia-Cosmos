'use client'

import { useState } from 'react'
import Link from 'next/link'

const Beta = () => {
  const [modal, setModal] = useState(true)

  return (
    <>
      {modal && (
        <div className='fixed z-90 flex h-screen w-screen  items-center justify-center bg-black/10 backdrop-blur-md dark:bg-white/10'>
          <div className='flex flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-6 drop-shadow-xl dark:bg-[#171717]'>
            <p className='mb-4 text-center font-light'>
              This app is currently in beta.
              <br />
              Use with
              <span className='text-quaternary-2 px-1 font-bold uppercase'>
                caution
              </span>
              or a
              <Link className='text-primary-0 px-1' href='https://TheIceJi.com'>
                stable version.
              </Link>
            </p>
            <button
              className='Anim hover:bg-primary-0 mt-2 w-full rounded-md border border-black py-2 text-xs font-light hover:font-bold hover:text-black dark:border-white'
              onClick={() => setModal(false)}
            >
              I understand
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Beta

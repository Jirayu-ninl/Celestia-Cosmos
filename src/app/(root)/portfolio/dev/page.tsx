'use client'

import { BtnlineEdge } from '@components/button'

function Page() {

  return (
    <main className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
      <h1 className='mb-8 text-2xl font-light'>
        Use 'Projects' and 'Works' pages instead
      </h1>
      <BtnlineEdge href='/project' text='projects' />
    </main>
  )
}

export default Page

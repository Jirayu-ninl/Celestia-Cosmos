'use client'

import { useRouter } from 'next/navigation'
import { Marquee } from './marquee'
import { Overlay } from './overlay'
import { Canvas } from './canvas'
import { Background } from './background'

export default function NotFound() {
  const router = useRouter()
  return (
    <>
      <div
        className='relative h-dvh w-screen bg-[#1a1710]'
        onClick={() => router.push('/')}
      >
        <Background />
        <Overlay />
        <Canvas />
        <Marquee />
      </div>
    </>
  )
}

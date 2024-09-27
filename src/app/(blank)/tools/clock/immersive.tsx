import { type Dispatch, useEffect } from 'react'
import { useKeyPress } from '@nexel/nextjs/libs/hooks/events/useKeyPress'

const Immersive = (p: { glow: boolean; setGlow: Dispatch<boolean> }) => {
  const pressG = useKeyPress('g')

  useEffect(() => {
    const toggle = () => {
      p.setGlow(!p.glow)
    }
    if (pressG) {
      toggle()
    }
  }, [pressG, p])

  return (
    <>
      <p className='fixed bottom-6 left-1/2 -translate-x-1/2 opacity-60'>
        Press F to hide UI
      </p>
    </>
  )
}

export { Immersive }

'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Canvas as C } from '@react-three/fiber'
import { StatsGl } from '@react-three/drei'
// import { useShallow } from 'zustand/react/shallow'
import { useUiState, useAppState } from '@/store'
import { useOptimization } from '@nexel/cosmos/gl/hooks'
import { Scene } from './scene'

export const Canvas = () => {
  const _gpuTier = useAppState((st) => st.gpuTier)
  const _dark = useUiState((st) => st.dark)
  const [antialias, setAntialias] = useState(true)

  const debug = useSearchParams().get('debug')

  useEffect(() => {
    const pixelRatio = window.devicePixelRatio
    if (pixelRatio > 1) {
      setAntialias(false)
    }
  }, [])

  const isMobile = _gpuTier?.isMobile ? _gpuTier.isMobile : false

  const getDRP: () => number[] = () => {
    if (_gpuTier?.fps) {
      const { drp } = useOptimization(_gpuTier.tier, 'tier')
      return drp
    }
    return [1, 1]
  }

  return (
    <>
      <C
        dpr={getDRP() as [number, number]}
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: antialias,
          stencil: false,
          depth: true,
        }}
        linear={true}
        shadows={true}
      >
        {/* <Suspense fallback={null}> */}
        <Scene />
        {/* </Suspense> */}
        {debug && <StatsGl />}
      </C>
    </>
  )
}

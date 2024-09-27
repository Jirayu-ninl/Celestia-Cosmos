/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { StatsGl } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useUiState, useAppState } from '@/store'
import { useOptimization } from '@nexel/cosmos/gl/hooks'
import Scene from './scene'
// import { useShallow } from 'zustand/react/shallow'

function CanvasApp() {
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
      <Canvas
        dpr={getDRP() as [number, number]}
        gl={{
          powerPreference: 'high-performance',
          alpha: true,
          antialias: antialias,
          stencil: false,
          depth: true,
          // logarithmicDepthBuffer: true,
        }}
        linear={true}
        shadows
      >
        <Scene _dark={_dark} isMobile={isMobile} />
        {debug && <StatsGl />}
      </Canvas>
    </>
  )
}

export default CanvasApp

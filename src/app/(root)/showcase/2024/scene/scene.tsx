'use client'

import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { PostProcessing } from './postprocessing'
import { Environments } from './environments'
import { Objects } from './objects'

export const Scene = () => {
  return (
    <>
      {/* <PerspectiveCamera makeDefault position={[0, 10, 45]} fov={60}> */}
      <PerspectiveCamera makeDefault position={[0, 20, 20]} fov={60}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} color={'#fff9d4'} />
        <Environments isMobile={false} />
      </PerspectiveCamera>
      <OrbitControls />
      <Objects />
      {/* <PostProcessing /> */}
    </>
  )
}

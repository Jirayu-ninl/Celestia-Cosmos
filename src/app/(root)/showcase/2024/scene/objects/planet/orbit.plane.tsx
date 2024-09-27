import type { RefObject } from 'react'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import CSM from 'three-custom-shader-material'
import { Plane } from '@react-three/drei'
import orbitPlaneVertexShader from './shaders/orbit.plane.v.glsl'
import orbitPlaneFragmentShader from './shaders/orbit.plane.f.glsl'

interface OrbitProps {
  $ref: RefObject<THREE.Mesh>
  orbitRadius: number
  ellipseFactor: number
}

export const OrbitPlane: React.FC<OrbitProps> = ({
  $ref,
  orbitRadius,
  ellipseFactor,
}) => {
  const orbitShaderUniforms = useMemo(
    () => ({
      u_time: {
        value: 0,
      },
      u_thickness: { value: 0.1 },
      uDark: { value: true },
    }),
    [],
  )

  //   useFrame(() => {
  //     orbitShaderUniforms.uTime.value += 0.05
  //   })

  return (
    <>
      <Plane
        ref={$ref}
        args={[2 * orbitRadius, 2 * (orbitRadius * ellipseFactor)]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <CSM
          baseMaterial={THREE.MeshStandardMaterial}
          uniforms={orbitShaderUniforms}
          fragmentShader={orbitPlaneFragmentShader}
          vertexShader={orbitPlaneVertexShader}
          side={THREE.DoubleSide}
          transparent
        />
      </Plane>
    </>
  )
}

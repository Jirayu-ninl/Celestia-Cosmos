import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Sphere, Line, Plane } from '@react-three/drei'
import { OrbitPoints } from './orbit.points'
import { OrbitPlane } from './orbit.plane'

interface PlanetProps {
  size: number
  segments?: number
  color: THREE.Color | string
  orbitRadius: number
  orbitSpeed?: number
  rad?: number
  ellipseFactor?: number
  rotation?: [number, number, number]
}

export const Planet: React.FC<PlanetProps> = ({
  size,
  segments = 16,
  color,
  orbitRadius,
  orbitSpeed = 1,
  rad = 0,
  ellipseFactor = 1,
  rotation = [0, 0, 0],
}) => {
  const $ref = useRef<THREE.Mesh | null>(null)
  const $orbitRef = useRef<any>(null)
  const $orbitPlaneRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    const angle = elapsedTime * orbitSpeed + rad
    if ($ref.current) {
      const ref = $ref.current
      ref.position.x = orbitRadius * Math.cos(angle)
      ref.position.z = ellipseFactor * orbitRadius * Math.sin(angle)
    }
  })

  const points = Array.from({ length: 101 }, (_, i) => {
    const angle = (i / 100) * Math.PI * 2
    return [
      orbitRadius * Math.cos(angle),
      0,
      ellipseFactor * orbitRadius * Math.sin(angle),
    ]
  })

  return (
    <>
      <mesh rotation={rotation}>
        <Sphere ref={$ref} args={[size, segments, segments]}>
          <meshBasicMaterial color={color} />
        </Sphere>
        {/* <Line ref={$orbitRef} points={points as any} color='white'>
          <meshBasicMaterial color={color} />
        </Line> */}
        {/* <OrbitPoints
          $ref={$orbitPlaneRef}
          orbitRadius={orbitRadius}
          ellipseFactor={ellipseFactor}
        /> */}
        <OrbitPlane
          $ref={$orbitPlaneRef}
          orbitRadius={orbitRadius}
          ellipseFactor={ellipseFactor}
        />
      </mesh>
    </>
  )
}

import type { RefObject } from 'react'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import CSM from 'three-custom-shader-material'
import orbitPointVertexShader from './shaders/orbit.point.v.glsl'
import orbitPointFragmentShader from './shaders/orbit.point.f.glsl'

interface OrbitProps {
  $ref: RefObject<THREE.Mesh>
  orbitRadius: number
  ellipseFactor: number
}

export const OrbitPoints: React.FC<OrbitProps> = ({
  $ref,
  orbitRadius,
  ellipseFactor,
}) => {
  const orbitShaderUniforms = useMemo(
    () => ({
      u_time: {
        value: 0,
      },
      u_thickness: { value: 0.01 },
      uDark: { value: true },
    }),
    [],
  )

  //   useFrame(() => {
  //     orbitShaderUniforms.uTime.value += 0.05
  //   })

  const initialParticles = 20
  const points = useMemo(() => {
    const vertices = []
    for (let i = 0; i < initialParticles * orbitRadius; i++) {
      const angle = (i / (initialParticles * orbitRadius)) * Math.PI * 2
      const x = Math.cos(angle) * orbitRadius
      const y = 0
      const z = Math.sin(angle) * orbitRadius * ellipseFactor
      vertices.push(x, y, z)
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3),
    )

    const initialPointSize = 0.07
    const sizes = new Float32Array(vertices.length / 3).fill(initialPointSize)
    for (let i = 0; i < sizes.length; i++) {
      sizes[i] += i % 2 === 0 ? 0.03 : -0.03
    }

    geometry.setAttribute('cSize', new THREE.BufferAttribute(sizes, 1))
    geometry.computeVertexNormals()

    return geometry
  }, [orbitRadius, ellipseFactor, initialParticles])

  return (
    <>
      <points geometry={points}>
        <CSM
          baseMaterial={THREE.PointsMaterial}
          uniforms={orbitShaderUniforms}
          fragmentShader={orbitPointFragmentShader}
          vertexShader={orbitPointVertexShader}
          transparent
        />
      </points>
    </>
  )
}

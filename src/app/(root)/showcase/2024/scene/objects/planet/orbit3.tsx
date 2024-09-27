import type { RefObject } from 'react'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import CSM from 'three-custom-shader-material'
import { Plane, Line } from '@react-three/drei'
import orbitVertexShader from './shaders/orbit.v.glsl'
import orbitFragmentShader from './shaders/orbit.f.glsl'
import orbitPointVertexShader from './shaders/orbitPoint.v.glsl'
import orbitPointFragmentShader from './shaders/orbitPoint.f.glsl'

interface OrbitProps {
  $ref: RefObject<THREE.Mesh>
  orbitRadius: number
  ellipseFactor: number
}

export const Orbit: React.FC<OrbitProps> = ({
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

  const numParticles = 200
  const points = useMemo(() => {
    const vertices = []
    for (let i = 0; i < numParticles; i++) {
      const angle = (i / numParticles) * Math.PI * 2
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

    const initialPointSize = 0.05
    const sizes = new Float32Array(vertices.length / 3).fill(initialPointSize)
    // for (let i = 0; i < sizes.length; i++) {
    //   sizes[i] += i % 2 === 0 ? 0.03 : -0.03
    // }

    geometry.setAttribute('cSize', new THREE.BufferAttribute(sizes, 1))

    geometry.computeVertexNormals()

    return geometry
  }, [numParticles])

  const geometry = useMemo(() => {
    const vertices = []
    for (let i = 0; i < numParticles; i++) {
      const angle = (i / numParticles) * Math.PI * 2
      const x = Math.cos(angle) * orbitRadius
      const y = 0
      const z = Math.sin(angle) * orbitRadius * ellipseFactor
      vertices.push(x, y, z)
      // vertices.push(new THREE.Vector3(x, y, z))
    }
    const geometry = new THREE.BufferGeometry()
    const verticesFloatArray = new Float32Array(vertices)
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(verticesFloatArray, 3),
    )
    return geometry
  }, [orbitRadius, ellipseFactor, numParticles])

  const pointsArray = Array.from({ length: 101 }, (_, i) => {
    const angle = (i / 100) * Math.PI * 2
    return [
      orbitRadius * Math.cos(angle),
      0,
      ellipseFactor * orbitRadius * Math.sin(angle),
    ]
  })

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
      `,
      uniforms: {
        u_time: { value: 0 },
        u_thickness: { value: 0.01 },
      },
    })
  }, [])
  return (
    <>
      {/* <Plane
        ref={$ref}
        args={[2 * orbitRadius, 2 * orbitRadius]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <CSM
          baseMaterial={THREE.MeshStandardMaterial}
          uniforms={orbitShaderUniforms}
          fragmentShader={orbitFragmentShader}
          vertexShader={orbitVertexShader}
          side={THREE.DoubleSide}
        />
      </Plane> */}
      <mesh geometry={geometry} >
        <CSM
          baseMaterial={THREE.MeshStandardMaterial}
          // uniforms={orbitShaderUniforms}
          // fragmentShader={orbitFragmentShader}
          // vertexShader={orbitVertexShader}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* <points geometry={geometry}>
        <CSM
          baseMaterial={THREE.PointsMaterial}
          uniforms={orbitShaderUniforms}
          fragmentShader={orbitPointFragmentShader}
          vertexShader={orbitPointVertexShader}
          transparent
        />
      </points> */}
    </>
  )
}

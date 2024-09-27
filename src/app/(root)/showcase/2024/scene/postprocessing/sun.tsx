import * as THREE from 'three'
import { GodRays } from '@react-three/postprocessing'

interface SunGodRaysProps {
  sun: THREE.Mesh<
    THREE.SphereGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >[]
}

export const SunGodRays = () => {
  const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xffddaa,
    transparent: true,
    fog: false,
  })

  const sunGeometry = new THREE.SphereGeometry(5, 48, 48)
  const Sun1 = new THREE.Mesh(sunGeometry, sunMaterial)
  Sun1.position.set(-37, 8, -30)

  const sun2Material = new THREE.MeshBasicMaterial({
    color: 0xaacbff,
    transparent: true,
    fog: false,
  })

  const sun2Geometry = new THREE.SphereGeometry(3, 24, 24)
  const Sun2 = new THREE.Mesh(sun2Geometry, sun2Material)
  Sun2.position.set(50, -8, -50)

  const Sun = [Sun1, Sun2]

  const GodRayProcess = () => (
    <>
      <GodRays
        sun={Sun1}
        height={480}
        density={2}
        decay={0.9}
        weight={0.6}
        exposure={1}
        samples={60}
        clampMax={1}
      />
      <GodRays
        sun={Sun2}
        height={480}
        density={1}
        decay={0.9}
        weight={0.6}
        exposure={1}
        samples={60}
        clampMax={1}
      />
    </>
  )

  return { Sun, GodRayProcess }
}

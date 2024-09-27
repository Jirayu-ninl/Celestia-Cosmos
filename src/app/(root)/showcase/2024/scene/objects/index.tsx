import { Stars, Sphere } from '@react-three/drei'
import { Vector3, Color } from 'three'
import { Planet } from './planet'

type PlanetProps = {
  size: number
  segments: number
  color: Color | string
  orbitRadius: number
  orbitSpeed: number
  rad: number
  ellipseFactor: number
  rotation: [number, number, number]
}

const planetInitialSpeed = 0.2
const Planets: PlanetProps[] = [
  {
    orbitRadius: 10,
    orbitSpeed: 0.5 * planetInitialSpeed,
    size: 1,
    segments: 16,
    color: 'blue',
    rad: 0,
    ellipseFactor: 1.8,
    rotation: [0, 0, 0],
  },
  //   {
  //     orbitRadius: 10,
  //     orbitSpeed: 0.5 * planetInitialSpeed,
  //     size: 1,
  //     segments: 16,
  //     color: 'blue',
  //     rad: 0,
  //     ellipseFactor: 1.2,
  //     rotation: [0, 0, 0],
  //   },
  //   {
  //     orbitRadius: 15,
  //     orbitSpeed: 0.4 * planetInitialSpeed,
  //     size: 1.2,
  //     segments: 16,
  //     color: 'yellow',
  //     rad: Math.PI / 6,
  //     ellipseFactor: 1.3,
  //     rotation: [0, 0, 0],
  //   },
  //   {
  //     orbitRadius: 20,
  //     orbitSpeed: 0.35 * planetInitialSpeed,
  //     size: 1.3,
  //     segments: 16,
  //     color: 'green',
  //     rad: Math.PI / 4,
  //     ellipseFactor: 1,
  //     rotation: [0, 0, 0],
  //   },
  //   {
  //     orbitRadius: 25,
  //     orbitSpeed: 0.2 * planetInitialSpeed,
  //     size: 1,
  //     segments: 16,
  //     color: 'red',
  //     rad: Math.PI / 3,
  //     ellipseFactor: 0.8,
  //     rotation: [0, 0, 0],
  //   },
  //   {
  //     orbitRadius: 22,
  //     orbitSpeed: 0.25 * planetInitialSpeed,
  //     size: 1.5,
  //     segments: 16,
  //     color: 'purple',
  //     rad: Math.PI / 2,
  //     ellipseFactor: 1.8,
  //     rotation: [0,Math.PI / 10, -Math.PI / 12],
  //   },
  //   {
  //     orbitRadius: 25,
  //     orbitSpeed: 0.2 * planetInitialSpeed,
  //     size: 1.8,
  //     segments: 16,
  //     color: 'orange',
  //     rad: (3 * Math.PI) / 4,
  //     ellipseFactor: 1.3,
  //     rotation: [Math.PI / 12, Math.PI / 2, 0],
  //   },
]

export const Objects = () => {
  return (
    <>
      {/* <Stars radius={300} depth={50} count={10000} factor={7} fade /> */}
      <group rotation={[0, 0, Math.PI / 6]}>
        <Sphere args={[5, 32, 32]} position={[0, 0, 0]}>
          {/* <meshStandardMaterial emissive='yellow' emissiveIntensity={1} /> */}
          <meshStandardMaterial color={'#1a1a1a'} />
        </Sphere>
        {Planets.map((props, i) => (
          <Planet {...props} key={i} />
        ))}
      </group>
    </>
  )
}

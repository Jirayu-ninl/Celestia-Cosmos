import type { Dispatch, RefObject } from 'react'
import type { Mesh } from 'three'

import { useRef, useMemo } from 'react'
import { Texture, Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
// import { useShallow } from 'zustand/shallow'
import Link from 'next/link'
import clsx from 'clsx'
import { useUiState, CURSOR } from '@/store'
import { CSS } from './projects.css'
import { ProjectsData } from '@/contents/pages/home'

import vertexShader from './shaders/projectWave.v.glsl'
import fragmentShader from './shaders/projectWave.f.glsl'

const HTML = ({
  _dark,
  setProjectHover,
}: {
  _dark: boolean
  setProjectHover: Dispatch<number>
}) => {
  return (
    <>
      <div className='absolute top-[1050dvh] flex w-screen flex-col px-2 sm:top-[1150vh] md:px-8'>
        {/* <h1 className='text-5xl font-bold uppercase'>Projects</h1> */}
        {ProjectsData.map((v, i) => (
          <Project
            title={v.title}
            link={v.link}
            tags={v.tags}
            year={v.year}
            _dark={_dark}
            ProjectHover={i}
            setProjectHover={setProjectHover}
            key={i}
          />
        ))}
      </div>
    </>
  )
}

const R3F = ({
  projectHover,
  $scroll,
}: {
  projectHover: number
  $scroll: RefObject<any>
}) => {
  const $projectImg = useRef<Mesh | null>(null)
  const shader = useMemo(
    () => ({
      uniforms: {
        u_time: {
          value: 0.0,
        },
        u_texture: {
          value: new Texture(),
        },
        u_progress: { value: 1 },
        u_alpha: { value: 1.0 },
      },
      vertexShader,
      fragmentShader,
    }),
    [],
  )
  const image = useTexture(ProjectsData.map((v) => v.image))

  useFrame(({ pointer }) => {
    shader.uniforms.u_time.value += 0.01
    shader.uniforms.u_texture.value = image[projectHover - 1]
    if ($projectImg.current) {
      const ref = $projectImg.current
      if (projectHover !== 0) {
        ref.visible = true
        if (shader.uniforms.u_progress.value <= 1) {
          shader.uniforms.u_progress.value += 0.04
        }
      } else {
        if (0 <= shader.uniforms.u_progress.value) {
          shader.uniforms.u_progress.value -= 0.04
        } else {
          shader.uniforms.u_progress.value = 0
        }
        if (shader.uniforms.u_progress.value === 0) {
          ref.visible = false
        }
      }

      const target = new Vector3()
      target.set(
        pointer.x * 1.7 + 1,
        pointer.y - $scroll.current.position.y - 0.2,
        -1,
      )
      ref.position.lerp(target, 0.1)
    }
  })

  return (
    <>
      <mesh position={[-1.7, -35, 0]} ref={$projectImg} scale={1.5}>
        <planeGeometry args={[1.6, 0.9, 20, 10]} />
        <shaderMaterial args={[shader]} transparent />
      </mesh>
    </>
  )
}

const Project = ({
  title,
  link,
  tags,
  year,
  _dark = true,
  ProjectHover,
  setProjectHover,
}: {
  title: string
  link: string
  tags: any[]
  year: number
  _dark?: boolean
  ProjectHover: number
  setProjectHover: Dispatch<number>
}) => {
  const _setCursor = useUiState((st) => st.setCursor)

  return (
    <>
      <Link
        href={link}
        className={clsx(
          CSS,
          'border-2 border-transparent border-t-black/20 pb-12 pt-6 opacity-100 hover:opacity-100 dark:border-t-white/30 md:opacity-40',
        )}
        onMouseEnter={() => setProjectHover(ProjectHover + 1)}
        onMouseMove={() => setProjectHover(ProjectHover + 1)}
        onMouseLeave={() => setProjectHover(0)}
      >
        <h6 className='xxl:-mb-6 xxl:text-4xl text-base font-bold md:-mb-2 md:text-2xl lg:text-3xl'>
          {year}
        </h6>
        <h3
          className='Anim xxl:text-10xl text-5xl font-bold leading-tight text-black dark:text-white md:text-transparent lg:text-8xl'
          onMouseEnter={() => _setCursor(CURSOR.GO)}
          onMouseMove={() => _setCursor(CURSOR.GO)}
          onMouseLeave={() => _setCursor(undefined)}
        >
          <span>{title.slice(0, 1)}</span>
          {title.slice(1)}
        </h3>
        <div className='flex space-x-3 uppercase'>
          {tags.map((v, i) => (
            <p
              key={i}
              className='Anim border border-foreground px-2 text-xs hover:border-primary hover:bg-primary hover:text-black lg:px-6 lg:py-1 lg:text-base'
            >
              {v.title}
            </p>
          ))}
        </div>
      </Link>
    </>
  )
}

const ProjectsSection = { HTML, R3F }

export default ProjectsSection

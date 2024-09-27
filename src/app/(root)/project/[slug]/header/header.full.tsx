'use client'

// import Image from 'next/image'
import { Image } from '@components'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import clsx from 'clsx'
import { _projectTag } from '../styles/tag.css'

interface HeaderProps {
  title: string
  headerImage: {
    url: string
    width: number
    height: number
  }
  tag?: string[]
  lang?: string
  isPreview: boolean
}

export const FullHeader: React.FC<HeaderProps> = ({
  title,
  headerImage,
  tag,
  lang = 'en',
  isPreview,
}) => {
  const { scrollY } = useScroll()
  const Y = useTransform(scrollY, [0, 2000], [0, 1000])
  const springY = useSpring(Y, { damping: 20, mass: 0.1, stiffness: 60 })

  const animList = {
    initial: { x: 100 },
    animate: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        delay: 0,
        staggerChildren: 0.2,
      },
    },
  }

  const animItem = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { type: 'tween' },
  }

  return (
    <div className='relative flex h-dvh items-end justify-center overflow-hidden bg-background'>
      <div
        className={clsx(
          'container z-10 w-screen px-4 2xl:w-[1440px]',
          _projectTag,
        )}
      >
        {tag && (
          <motion.div
            variants={animList}
            initial='initial'
            animate='animate'
            className='uppercase'
          >
            {tag.map((v: string, i: number) => (
              <motion.button
                className='_project-tag'
                key={i}
                variants={animItem}
              >
                {v}
              </motion.button>
            ))}
          </motion.div>
        )}
        <motion.h1
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='mb-12 mt-1 text-5xl font-bold sm:text-6xl md:mt-0 md:text-7xl 2xl:text-8xl'
        >
          {title}
        </motion.h1>
      </div>
      <motion.div className='absolute h-dvh w-screen' style={{ y: springY }}>
        <Image
          src={headerImage.url}
          alt={title}
          fill
          objectFit='cover'
          // quality={100}
          // placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
          // unoptimized={isPreview}
          unoptimized
        />
      </motion.div>
      <div className='absolute h-80 w-screen bg-gradient-to-t from-background to-background/0'></div>
    </div>
  )
}

'use client'

// import Image from 'next/image'
import { Image } from '@components'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import clsx from 'clsx'
import { _postTag } from './styles'

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

export const Header: React.FC<HeaderProps> = ({
  title,
  headerImage,
  tag,
  lang = 'en',
  isPreview,
}) => {
  const { scrollY } = useScroll()
  const Y = useTransform(scrollY, [0, 2000], [0, 1000])
  const springY = useSpring(Y, { damping: 20, mass: 0.1, stiffness: 60 })

  return (
    <div className='relative flex h-dvh items-end justify-center overflow-hidden bg-background'>
      <div
        className={clsx('container z-10 w-dvw px-4 xl:w-[1024px]', _postTag)}
      >
        {tag && (
          <motion.div className='uppercase'>
            {tag.map((v: string, i: number) => (
              <motion.button
                className='_post-tag'
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                {v}
              </motion.button>
            ))}
          </motion.div>
        )}
        <motion.h1
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='mb-12 mt-1 text-3xl font-bold md:mt-0 md:text-7xl 2xl:text-8xl'
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
          unoptimized={isPreview}
        />
      </motion.div>
      <div className='absolute h-80 w-screen bg-gradient-to-t from-background to-background/0'></div>
    </div>
  )
}

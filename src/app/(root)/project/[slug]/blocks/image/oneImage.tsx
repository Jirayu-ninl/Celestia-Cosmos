'use client'

import { ImageBlockProps } from './image.common'
import { motion } from 'framer-motion'
// import Image from 'next/image'
import { Image } from '@components'
import { useAnimateObjectWhenScroll } from '@cosmos/animations/hooks'

export const OneImage: React.FC<ImageBlockProps> = ({ image, isPreview }) => {
  const img = image.images[0]
  const aspectRatio = `${img.width} / ${img.height}`
  const { ref, motionValue } = useAnimateObjectWhenScroll({
    setScrollRange: (rect) => (rect ? [rect.top - 1000, rect.bottom] : [0, 0]),
    setValueRange: [-200, 200],
  })
  return (
    <div
      className='container relative my-[4rem] mb-24 overflow-hidden rounded-xl'
      style={{
        aspectRatio,
      }}
    >
      <motion.div
        ref={ref}
        style={{
          aspectRatio,
          y: motionValue,
          scale: 1.1,
        }}
      >
        <Image
          src={img.url}
          alt={image.title || 'project banner image'}
          // layout='fill'
          // quality={100}
          fill
          objectFit='cover'
          // placeholder='blur'
          // blurDataURL={
          //   'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          // }
          unoptimized={isPreview}
        />
      </motion.div>
    </div>
  )
}

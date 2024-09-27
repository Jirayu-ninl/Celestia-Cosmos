'use client'

import { ImageBlockProps } from './image.common'
import { motion } from 'framer-motion'
// import Image from 'next/image'
import { Image } from '@components'
import { useAnimateObjectWhenScroll } from '@nexel/cosmos/animations/hooks'

export const MobileMockupImages: React.FC<ImageBlockProps> = ({
  image,
  isPreview,
}) => {
  const { ref, motionValue } = useAnimateObjectWhenScroll({
    setScrollRange: (rect) => (rect ? [rect.top - 1000, rect.bottom] : [0, 0]),
    setValueRange: (rect) => (rect ? [0, -rect.width] : [0, 0]),
  })

  return (
    <>
      <motion.div
        className='my-[6rem] w-full'
        //  ref={$container}
        ref={ref}
      >
        <motion.div
          // style={{ x: springX }}
          style={{ x: motionValue }}
          className='inline-flex space-x-6 overflow-visible'
        >
          {[...image.images, ...image.images].map((img, i: number) => (
            <div
              className='relative h-[60vh]'
              style={{ aspectRatio: `${img.width} / ${img.height}` }}
              key={i}
            >
              <Image
                className='pointer-events-none'
                src={img.url}
                alt={`${image.title || 'project banner image'}_${i}`}
                width={img.width}
                height={img.height}
                // placeholder='blur'
                // blurDataURL={
                //   'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                // }
                unoptimized={isPreview}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}

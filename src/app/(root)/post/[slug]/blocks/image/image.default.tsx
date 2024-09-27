import { ImageBlockProps } from './image.common'
// import Image from 'next/image'
import { Image } from '@components'

export const DefaultImage: React.FC<ImageBlockProps> = ({
  image,
  isPreview,
}) => {
  return (
    <>
      <div
        className='relative flex w-full justify-center overflow-hidden rounded-xl xl:w-[1024px]'
        style={{
          aspectRatio: `${image.images[0].width} / ${image.images[0].height}`,
        }}
      >
        <Image
          src={image.images[0].url}
          alt={image.title || 'post'}
          fill
          objectFit='cover'
          // placeholder='blur'
          // blurDataURL={
          //   'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          // }
          unoptimized={isPreview}
        />
      </div>
    </>
  )
}

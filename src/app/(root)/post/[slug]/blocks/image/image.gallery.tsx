import { ImageBlockProps } from './image.common'
// import Image from 'next/image'
import { Image } from '@components'

export const GalleryImages: React.FC<ImageBlockProps> = ({
  image,
  isPreview,
}) => {
  return (
    <div className='mb-24 grid grid-cols-1 gap-4 md:grid-cols-2 xl:w-[1024px]'>
      {image.images.map((v: any, i: number) => (
        <div
          className='Anim relative h-64 overflow-hidden rounded-md lg:h-80 xl:hover:scale-95'
          key={i}
        >
          <Image
            className='Anim AnimScale-sm'
            src={v.url}
            alt={`${image.title || 'post-image'}_${i}`}
            // width={v.width}
            // height={v.height}
            fill
            objectFit='cover'
            // quality={100}
            // placeholder='blur'
            // blurDataURL={
            //   'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            // }
            unoptimized={isPreview}
          />
        </div>
      ))}
    </div>
  )
}

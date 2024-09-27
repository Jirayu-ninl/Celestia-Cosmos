import { ImageBlockProps } from './image.common'
// import Image from 'next/image'
import { Image } from '@components'

export const Gallery4Images: React.FC<ImageBlockProps> = ({
  image,
  isPreview,
}) => {
  return (
    <div className='container my-[4rem] mb-24 grid grid-cols-1 gap-4 md:grid-cols-2'>
      {image.images.map((v: any, i: number) => (
        <div
          className='Anim relative h-64 overflow-hidden rounded-md lg:h-80 xl:hover:scale-95'
          key={i}
        >
          <Image
            className='Anim AnimScale-sm'
            src={v.url}
            alt={`${image.title || 'project banner image'}_${i}`}
            // layout='fill'
            // quality={100}
            // placeholder='blur'
            fill
            objectFit='cover'
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

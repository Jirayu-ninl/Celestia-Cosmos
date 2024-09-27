import { ImageBlockProps } from './image.common'
// import Image from 'next/image'
import { Image } from '@components'

export const BannerImage: React.FC<ImageBlockProps & { isLogo?: boolean }> = ({
  image,
  isLogo,
  isPreview,
}) => {
  if (isLogo) {
    return (
      <div
        className='container relative my-[4rem] flex h-32 w-full items-center justify-center overflow-hidden rounded-lg md:h-48 lg:h-60'
        style={{ backgroundColor: image.fillColor?.hex }}
      >
        <div className='w-2/5'>
          <Image
            src={image.images[0].url}
            alt={image.title || 'project banner image'}
            width={image.images[0].width}
            height={image.images[0].height}
            // placeholder='blur'
            objectFit='contain'
            // blurDataURL={
            //   'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            // }
            unoptimized={isPreview}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className='container my-[4rem] w-full'>
        <div
        className='relative overflow-hidden rounded-lg'
          style={{
            width: '100%',
            aspectRatio: image.images[0].width / image.images[0].height,
          }}
        >
          <Image
            src={image.images[0].url}
            alt={image.title || 'project banner image'}
            fill
            objectFit='cover'
            // placeholder='blur'
            // blurDataURL={
            //   'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            // }
            unoptimized={isPreview}
          />
        </div>
      </div>
    )
  }
}

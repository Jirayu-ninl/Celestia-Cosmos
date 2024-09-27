import NextImage from 'next/image'
import clsx from 'clsx'

type ImgProps = {
  src: string
  unoptimized?: boolean
  alt?: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  objectFit?: 'contain' | 'cover'
  objectPosition?: string
  events?: Record<string, () => void>
  blurDataURL?: string
}

export const Image = (p: ImgProps) => {
  if (p.unoptimized) {
    const initialStyle = {
      objectFit: p.objectFit ?? 'cover',
      objectPosition: p.objectPosition ?? '50% 50%',
    }
    const imgProps =
      p.width && p.height
        ? {
            width: p.width,
            height: p.height,
            style: initialStyle,
          }
        : {
            style: {
              ...initialStyle,
              position: 'absolute',
              width: '100%',
              height: '100%',
            },
          }
    return (
      <img
        {...p.events}
        className={clsx(p.className)}
        src={p.src}
        alt={p.alt ?? 'TheIceJi'}
        {...imgProps}
      />
    )
  }
  return (
    <NextImage
      {...p.events}
      className={clsx(p.className)}
      src={p.src}
      alt={p.alt ?? 'TheIceJi'}
      fill={p.fill}
      width={p.width}
      height={p.height}
      style={{
        objectFit: p.objectFit ?? 'cover',
        objectPosition: p.objectPosition ?? '50% 50%',
      }}
      placeholder='blur'
      blurDataURL={
        p.blurDataURL ??
        'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
      }
    />
  )
}

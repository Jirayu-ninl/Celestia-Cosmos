import { Content, ImageContent, TextContent, RawContent } from '@types'
import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const Tags = {
  paragraph: 'p',
  'heading-one': 'h1',
}

const renderElement = ({ block }: { block: Content }) => {
  if ('src' in block) {
    return (
      <div className='flex w-full justify-center py-8'>
        <Image
          className='overflow-hidden rounded-lg'
          src={block.src}
          alt={block.altText}
          height={block.height}
          width={block.width}
          // fill
          objectFit='cover'
          placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
        />
      </div>
    )
  }

  if (block.type) {
    const Tag = Tags[block.type as 'paragraph' | 'heading-one']
    return (
      <Tag>
        {Array.isArray(block.children)
          ? block.children.map(renderElement)
          : block.children}
      </Tag>
    )
  }

  return <></>
}

interface HTMLFromRawProps {
  raw: Content[]
}

const HTMLFromRaw: React.FC<HTMLFromRawProps> = ({ raw }) => {
  return <div>{raw.map(renderElement)}</div>
}

export { HTMLFromRaw }

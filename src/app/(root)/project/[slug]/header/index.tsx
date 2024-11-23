'use client'

import { PROJECT } from '@/enums/content'
import { FullHeader } from './header.full'

interface HeaderProps {
  title: string
  tag: string[]
  header: {
    selectHeaderType: `${PROJECT.HEADER}`
    headerGallery: {
      url: string
      height: number
      width: number
      mimeType?: string
    }[]
  }
  isPreview: boolean
}

export const Header: React.FC<HeaderProps> = ({
  header,
  title,
  tag,
  isPreview,
}) => {
  switch (header.selectHeaderType) {
    case PROJECT.HEADER.FULL:
      return (
        <FullHeader
          title={title}
          headerImage={header.headerGallery[0]}
          tag={tag}
          lang='th'
          isPreview={isPreview}
        />
      )

    default:
      return null
  }
}

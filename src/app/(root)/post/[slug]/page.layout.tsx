'use client'

// import { useShallow } from 'zustand/react/shallow'
import { SmoothScroll, OnScrollFunctionProps } from '@nexel/cosmos/animations'
import { useUiState, NAV_DYN_TYPE, DynamicNavShareSocial } from '@/store'

interface PostLayoutProps {
  children: React.ReactNode
  title: string
  excerpt: string | null
  slug: string
  coverImage: { url: string; width: number; height: number }
}

export const Layout: React.FC<PostLayoutProps> = ({
  children,
  title,
  slug,
  excerpt,
  coverImage,
}) => {
  const basePath = 'https://theiceji.com/post/'
  const shareMedia = title + '|' + excerpt

  const _setDynamicNav = useUiState((st) => st.setDynamicNav)
  const onScroll = (state: OnScrollFunctionProps) => {
    _setDynamicNav([
      { type: NAV_DYN_TYPE.PROGRESS, ...state },
      { type: NAV_DYN_TYPE.BACK, href: '/post' },
      {
        type: NAV_DYN_TYPE.SHARE,
        title: shareMedia,
        url: basePath + slug,
        img: coverImage.url,
        social: [
          DynamicNavShareSocial.facebook,
          DynamicNavShareSocial.twitter,
          DynamicNavShareSocial.pinterest,
          DynamicNavShareSocial.line,
          DynamicNavShareSocial.weibo,
        ],
      },
    ])
  }

  return (
    <>
      <SmoothScroll onScroll={onScroll}>{children}</SmoothScroll>
    </>
  )
}

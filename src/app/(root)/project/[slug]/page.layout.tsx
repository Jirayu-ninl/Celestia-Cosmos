'use client'

import { useShallow } from 'zustand/shallow'
import { SmoothScroll, OnScrollFunctionProps } from '@nexel/cosmos/animations'
import { useUiState, NAV_DYN_TYPE, DynamicNavShareSocial } from '@/store'

interface ProjectLayoutProps {
  children: React.ReactNode
  title: string
  tagline: string | null
  slug: string
  coverImage: { url: string; width: number; height: number }
  website: string | null
}

export const Layout: React.FC<ProjectLayoutProps> = ({
  children,
  title,
  slug,
  tagline,
  coverImage,
  website,
}) => {
  const basePath = 'https://theiceji.com/project/'
  const shareMedia = title + '|' + tagline

  const [_setDynamicNav, _addDynamicNav] = useUiState(
    useShallow((st) => [st.setDynamicNav, st.addDynamicNav]),
  )
  const onScroll = (state: OnScrollFunctionProps) => {
    _setDynamicNav([
      { type: NAV_DYN_TYPE.PROGRESS, ...state },
      { type: NAV_DYN_TYPE.BACK, href: '/project' },
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
    if (website) {
      _addDynamicNav({
        type: NAV_DYN_TYPE.EXTERNAL_LINK,
        href: website,
      })
    }
  }

  return (
    <>
      <SmoothScroll onScroll={onScroll}>{children}</SmoothScroll>
    </>
  )
}

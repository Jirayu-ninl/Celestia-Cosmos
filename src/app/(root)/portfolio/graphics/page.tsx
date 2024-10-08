'use client'

import { useUiState, NAV_DYN_TYPE } from '@/store'
import Header from './components/header'
import TableOfContents from './components/tableOfContents'
import { SmoothScroll, OnScrollFunctionProps } from '@nexel/cosmos/animations'

import Content from './contents'

function Page() {
  const _setDynamicNav = useUiState((st) => st.setDynamicNav)
  const onScroll = (state: OnScrollFunctionProps) => {
    _setDynamicNav([{ type: NAV_DYN_TYPE.PROGRESS, ...state }])
  }

  return (
    <>
      <SmoothScroll
        onScroll={onScroll}
        physics={{ damping: 1, mass: 0.01, stiffness: 5 }}
      >
        <Header
          Title='Portfolio (Post-production)'
          Img='/page/portfolio/header.jpg'
          Tags={[]}
          lang='th'
        />
        <div className='flex w-full'>
          <div className='container px-4 py-12 sm:px-8 sm:py-24 md:px-12 lg:py-48 xl:w-[1024px]'>
            <TableOfContents />
            <Content />
          </div>
        </div>
      </SmoothScroll>
    </>
  )
}

export default Page

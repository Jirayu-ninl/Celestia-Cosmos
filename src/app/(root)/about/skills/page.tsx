/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { useUiState } from '@/store'
import * as mySkills from '@/contents/pages/about.skills'
import { Header } from './header'
import { SkillSection } from './sections'

const MySkill = () => {
  const _dark = useUiState((state) => state.dark)
  const [MenuSection, setMenuSection] = useState(0)

  const InPageRoute = [
    'Skills | Projects',
    'Skills | Dev Skills',
    'Skills | Expertises',
    'Skills | Certificates',
    'Skills | Team & Members',
    'Skills | Works',
  ]

  return (
    <>
      <div className='xxl:w-[1440px] mx-auto flex h-dvh flex-col items-start overflow-hidden px-4 sm:container sm:px-0 md:flex-row'>
        <div className='mx-0 mt-5 w-full sm:mt-14 md:mx-5 md:w-1/2 rounded-lg'>
          <Header
            MenuSection={MenuSection}
            setMenuSection={setMenuSection}
            _dark={_dark}
          />
        </div>
        <div className='NSB z-10 mx-0 h-full w-full overflow-auto pt-2 sm:pt-6 md:w-1/2 md:px-5 md:pt-14'>
          <SkillSection
            MenuSection={MenuSection}
            data={mySkills}
            _dark={_dark}
          />
          <div className='h-[60px] w-full'></div>
        </div>
      </div>
      {/* <div className='Card-back-md-40 fixed bottom-0 z-10 h-12 w-screen'></div> */}
    </>
  )
}

export default MySkill

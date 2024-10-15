'use client'

import { Section } from './common'
import { useSearchParams } from 'next/navigation'
import { useShallow } from 'zustand/shallow'
import { useUiState } from '@/store'
import { FreeTimeItems } from '@/contents/pages/about'
import { Nav } from './components/nav'
import { MoreSection } from './section.more'
import { FactsSection } from './section.fact'
import { FreeTimeSection } from './section.freetime'
import { HeroSection } from './section.hero'

const Client = () => {
  const _dark = useUiState(useShallow((state) => state.dark))
  const searchParams = useSearchParams()
  const _section = searchParams.get('section')

  const Component = () => {
    switch (_section) {
      case Section.FACTS:
        return <FactsSection _dark={_dark} />
      case Section.HOBBIES:
        return <FreeTimeSection data={FreeTimeItems} />
      case Section.MORE:
        return <MoreSection _dark={_dark} />
      default:
        return <HeroSection />
    }
  }

  return (
    <>
      <SectionLayout _section={_section}>
        <Component />
      </SectionLayout>
      <Nav _section={_section} />
    </>
  )
}

const SectionLayout = ({
  _section,
  children,
}: {
  _section: string | null
  children: React.ReactNode
}) => {
  if (_section === Section.HOBBIES) {
    return children
  }
  return (
    <>
      <div className='xxl:w-[1440px] mx-auto h-dvh w-dvw items-start overflow-hidden px-4 sm:container sm:px-0'>
        {children}
      </div>
    </>
  )
}

export default Client

// import { Canvas } from './scene'
import { MainBox } from './box.main'
import { InfoBox } from './box.info'
import { LinkBox } from './box.link'

const Page = () => {
  return (
    <>
      <div className='flex h-dvh w-dvw flex-col space-y-2 p-2 md:space-y-4 md:p-4 xl:flex-row xl:space-x-4 xl:space-y-0 xl:p-6'>
        <MainBox />
        <div className='flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0 xl:flex-col xl:space-x-0 xl:space-y-4'>
          <InfoBox />
          <LinkBox />
        </div>
      </div>
    </>
  )
}

export default Page

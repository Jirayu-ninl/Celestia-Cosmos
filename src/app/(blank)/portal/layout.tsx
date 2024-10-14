import Link from 'next/link'
import { Image } from '@components'
import { ArrowLeft } from '@components/icons'
import { DarkModeSwitch } from './layout.darkmode'

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='absolute h-dvh w-dvw'>
        <Image
          className='blur-sm'
          src='/layout/portal.jpg'
          alt='Portal bg'
          objectFit='cover'
          fill
          quality={80}
        />
      </div>
      <div className='absolute flex h-dvh w-dvw items-center justify-center bg-background-deep/80'>
        <div className='flex md:h-[410px]'>
          <div className='relative hidden h-full w-96 overflow-hidden rounded-lg shadow-xl shadow-black/30 md:block'>
            <Image
              className='brightness-75 hue-rotate-180 invert dark:filter-none'
              src='/cover.jpg'
              alt='TheIceJI'
              objectFit='cover'
              fill
              quality={80}
            />
          </div>
          <div className='mt-2 h-[calc(100%-1rem)] rounded-lg bg-background/80 backdrop-blur-md md:rounded-r-lg'>
            {children}
          </div>
        </div>
      </div>
      <Link
        href='/'
        className='Anim AnimOpacity-60 absolute left-4 top-4 flex items-center space-x-2 text-foreground'
      >
        <div className='h-4 w-4'>
          <ArrowLeft />
        </div>
        <p>HOME</p>
      </Link>
      <DarkModeSwitch />
    </>
  )
}

export default Page

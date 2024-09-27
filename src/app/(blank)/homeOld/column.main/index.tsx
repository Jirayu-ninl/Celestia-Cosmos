import { Logo } from './logo'
import { ToggleDark } from './toggle.dark'
import { Project } from './projects'
import { ContactBlock } from './footer.social'

export const ColumnMain = () => {
  return (
    <>
      <div className='flex grow flex-col justify-between xl:h-full'>
        <div className='flex h-16 justify-between xl:h-20 el:h-24'>
          <div className='h-full cursor-pointer xl:w-20 el:w-24'>
            <Logo />
          </div>
          <ToggleDark />
        </div>
        <div>
          <div className='xl:pt-0'>
            <h2 className='-mb-[2vw] text-xl font-light md:-mb-[2vw] md:text-3xl xl:mb-0 el:text-4xl'>
              Hi! Here's
            </h2>
            <h2 className='-mb-[2vw] text-[8vw] font-bold md:-mb-[5vw] xl:mb-0 xl:text-5xl el:text-7xl'>
              Digital Realm
            </h2>
            <div className='-my-4 inline-flex items-end'>
              <p className='-mr-2 mb-[5.8vw] opacity-60 md:mb-[6.5vw] md:text-5xl xl:mb-[1.9vw] xl:text-4xl el:mb-[2.2vw] eel:text-6xl'>
                of
              </p>
              <h1 className='text-quaternary-2 dark:text-primary-0 text-[20vw] xl:text-[6.5vw]'>
                TheIceJi
              </h1>
            </div>
          </div>
          <Project />
        </div>
        <div className='fixed right-4 top-0 space-y-2 pt-24 md:right-8 md:top-[7vh] xl:static'>
          <ContactBlock />
          <span className='hidden opacity-40 xl:inline-flex'>
            Copyright©{new Date().getFullYear()} by
          </span>
          <a
            href='http://TheIceJI.com'
            className='Anim AnimOpacity-60 hidden pl-1 xl:inline-flex'
          >
            Jirayu Ninlapun
          </a>
        </div>
      </div>
    </>
  )
}

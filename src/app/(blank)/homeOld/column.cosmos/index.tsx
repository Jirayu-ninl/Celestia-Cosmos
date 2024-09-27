import { Image } from '@components'

export const ColumnCosmos = () => {
  return (
    <>
      <div className='h-[30dvh] w-full pt-8 xl:h-full xl:pt-0'>
        <div className='relative h-full w-full'>
          <Image
            src='/layout/appInfo-1.jpg'
            alt='cosmos app'
            className='h-full w-full overflow-hidden rounded-[1rem] xl:rounded-[2rem]'
            objectFit='cover'
          />
          <div className='absolute -bottom-10 -right-2 w-80 rounded-lg bg-white/60 p-4 backdrop-blur-md dark:bg-black/60 md:w-[26rem] md:rounded-[1rem] md:p-6 xl:-right-48 xl:bottom-20 el:w-[32rem] eel:w-[42rem] eel:p-12'>
            <div className='flex items-center justify-between'>
              <h2 className='font-bold md:text-2xl el:text-4xl eel:text-5xl'>
                COSMOS update
              </h2>
              <p>Mar 31, 2024</p>
            </div>
            <p className='pt-2 text-xs opacity-70 md:text-base el:text-lg eel:text-2xl'>
              You are cordially invited to embark on an extraordinary journey
              through the Cosmos app!
            </p>
            <button className='Anim dark:hover:text-primary-0 hover:text-quaternary-2 mt-4 rounded-full text-xs font-bold uppercase hover:translate-x-2 dark:hover:translate-x-2 md:text-sm eel:text-lg'>
              launch cosmos
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

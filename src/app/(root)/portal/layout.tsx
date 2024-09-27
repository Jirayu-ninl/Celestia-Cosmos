import Image from 'next/image'

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='m-container from-backgroundLight-1 dark:from-background-3 dark:to-background-0 flex w-svw items-center justify-center bg-gradient-to-br to-blue-200'>
        <div className='flex md:h-[410px]'>
          <div className='relative hidden h-full w-96 overflow-hidden rounded-lg shadow-xl shadow-black/30 md:block'>
            <Image
              className='brightness-75 hue-rotate-180 invert dark:filter-none'
              src='/cover.jpg'
              alt='TheIceJI'
              objectFit='cover'
              fill
              quality={100}
            />
          </div>
          <div className='h-full'>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Page

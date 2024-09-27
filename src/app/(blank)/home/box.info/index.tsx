import { QuoteLeft, QuoteRight } from '@components/icons'

export const InfoBox = () => {
  return (
    <>
      <div className='relative flex grow items-center justify-center rounded-[2rem] bg-foreground/5 p-8 xl:max-w-[380px] el:max-w-[577px] [&:hover>div]:opacity-100 [&:hover>div]:duration-150 [&>div]:opacity-40 [&>div]:duration-500'>
        <div className='relative text-center leading-8 el:text-4xl el:leading-[3.25rem]'>
          <QuoteLeft className='absolute -top-8 left-0 h-16 w-16 opacity-20' />
          <p>
            I'm TheIceJi, a Creative Developer with a passion for pushing the
            boundaries of web technology. My expertise lies in WebGL, GLSL, and
            3D development, and I thrive on creating immersive and visually
            stunning experiences.
          </p>
          <QuoteRight className='absolute -bottom-8 right-0 h-16 w-16 opacity-20' />
        </div>
      </div>
    </>
  )
}

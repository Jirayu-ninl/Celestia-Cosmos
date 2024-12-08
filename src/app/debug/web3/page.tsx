import { Client } from './client'

const Page = () => {
  return (
    <>
      <>
        <div className='flex h-dvh w-dvw flex-col items-center justify-center'>
          <div className='flex w-64 flex-col items-center rounded-md border border-foreground/20 px-4 py-8 text-center'>
            <Client />
          </div>
        </div>
      </>
    </>
  )
}

export default Page

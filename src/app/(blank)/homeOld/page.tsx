import { Client } from './page.client'
import { ColumnMain, ColumnCosmos, ColumnNavigate } from './column'

function Page() {
  return (
    <>
      <Client />
      <div className='flex h-dvh w-dvw flex-col items-center justify-center p-4 py-[2vh] md:h-dvh md:p-8 xl:grid xl:grid-cols-3 xl:grid-rows-1'>
        <ColumnMain />
        <ColumnCosmos />
        <ColumnNavigate />
      </div>
    </>
  )
}

export default Page

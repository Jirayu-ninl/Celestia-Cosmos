import { Logo } from './logo'
import { Title } from './title'
import { Sections } from './sections'

export const MainBox = () => {
  return (
    <>
      <div className='relative flex grow flex-col rounded-[1rem] bg-foreground/5 py-4 md:py-6 2xl:py-8'>
        <Title />
        <Sections />
        <Logo />
      </div>
    </>
  )
}

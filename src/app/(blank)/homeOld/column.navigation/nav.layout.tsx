export const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ul className='font-extralight uppercase sm:space-y-2 sm:text-xl md:space-y-4 md:text-3xl xl:space-y-3 xl:text-2xl xxl:text-4xl el:space-y-6 eel:text-6xl [&>li:hover]:translate-x-4 [&>li:hover]:font-bold [&>li:hover]:opacity-100 [&>li]:opacity-60'>
        {children}
      </ul>
    </>
  )
}

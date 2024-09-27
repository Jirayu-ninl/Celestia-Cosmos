export const Title = () => {
  return (
    <>
      <h1 className='absolute text-[14vw] font-bold leading-[12vw] opacity-0'>
        TheIceJi
      </h1>
      <div className='w-full overflow-hidden min-h-[14vw] px-2 md:px-6 2xl:px-8'>
        <svg
          viewBox='0 0 360 62'
          className='h-full w-full font-bold'
          preserveAspectRatio='xMinYMid meet'
        >
          <text x='0' y='60' font-size='75' fill='hsl(var(--primary))'>
            T
          </text>
          <text x='50' y='60' font-size='75' fill='hsl(var(--foreground))'>
            heIceJi
          </text>
        </svg>
      </div>
    </>
  )
}

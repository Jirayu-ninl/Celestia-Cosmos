import { GridBlockProps } from './grid.common'

export const MinimalGrid: React.FC<GridBlockProps> = ({ grid }) => {
  return (
    <div className='container my-[6rem] grid grid-cols-1 px-32 md:grid-cols-3'>
      {grid.title && (
        <>
          <div className='bg-background-deep/30 flex aspect-square w-full flex-col items-center justify-center border border-primary md:p-6'>
            <h3 className='text-center text-3xl font-bold text-primary'>
              {grid.title}
            </h3>
          </div>
        </>
      )}
      {grid.items.map((item, i: number) => (
        <div
          className='Anim flex aspect-square w-full flex-col items-center justify-center border border-foreground/10 hover:bg-foreground/5'
          key={item.title}
        >
          {item.title && (
            <h4 className='text-center text-2xl font-bold'>{item.title}</h4>
          )}
          {item.subtitle && <h5 className='opacity-80'>{item.subtitle}</h5>}
          {item.description && (
            <p className='w-3/5 pt-4 text-center opacity-60'>
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

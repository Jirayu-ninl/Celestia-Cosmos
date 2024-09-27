'use client'

import { GridBlockProps } from './grid.common'
import { useUiState } from '@/store'
import { MagicCard } from '@/components/magicui/magic-card'

export const CardGrid: React.FC<GridBlockProps> = ({ grid }) => {
  const _dark = useUiState((st) => st.dark)
  return (
    <>
      <div className='container my-[6rem] grid grid-cols-1 gap-4 px-32 md:grid-cols-3'>
        {grid.title && (
          <>
            <MagicCard
              className='flex aspect-square w-full flex-col items-center justify-center border border-primary bg-background-deep/30 md:p-6'
              gradientColor={_dark ? '#262626' : '#D9D9D955'}
            >
              <h3 className='text-center text-3xl font-bold text-primary'>
                {grid.title}
              </h3>
            </MagicCard>
          </>
        )}
        {grid.items.map((item, i: number) => (
          <MagicCard
            className='Anim aspect-square w-full cursor-pointer border border-foreground/10 hover:bg-foreground/5'
            key={item.title}
            gradientColor={_dark ? '#262626' : '#D9D9D955'}
          >
            <div className='Anim flex h-full w-full flex-col items-center justify-center'>
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
          </MagicCard>
        ))}
      </div>
    </>
  )
}

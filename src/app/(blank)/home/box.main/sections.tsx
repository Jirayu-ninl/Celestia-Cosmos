import Link from 'next/link'
import clsx from 'clsx'
import { data, Data } from './data'

export const Sections = () => {
  return (
    <div className='z-10 w-full grow overflow-scroll px-4 md:px-6 2xl:py-8'>
      {Object.entries(data).map(([key, value]) => (
        <Section key={key} title={key} value={value} />
      ))}
    </div>
  )
}

export const Section = ({ title, value }: { title: string; value: Data[] }) => {
  return (
    <>
      <div className='mt-4'>
        <h2 className='font-bold opacity-60 el:text-3xl'>
          {/* {title !== 'Showcase' && title} */}
          {title}
        </h2>
        <div className='mt-1 flex flex-wrap gap-2 2xl:mt-2 el:gap-4'>
          {value.map((v) => (
            <Link
              href={v.href}
              className={clsx(
                v.disabled && 'pointer-events-none hidden opacity-50 md:block',
              )}
            >
              <button className='Anim AnimTranslate-4 flex h-16 items-center rounded-md border border-foreground/30 bg-foreground/5 px-3 text-left opacity-50 backdrop-blur-lg hover:bg-primary hover:text-background hover:opacity-100 hover:shadow-lg el:h-24 el:px-8'>
                {v.imgUrl && (
                  <div className='mr-2 aspect-square h-10 rounded-full'>
                    <img
                      src={v.imgUrl}
                      alt={v.title}
                      className='h-full w-full object-contain'
                    />
                  </div>
                )}
                <div>
                  <h3 className='text-sm font-bold 2xl:text-base el:text-3xl'>
                    {v.title}
                  </h3>
                  <p className='-my-0.5 text-xs opacity-80 2xl:text-sm el:text-xl'>
                    {v.description}
                  </p>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

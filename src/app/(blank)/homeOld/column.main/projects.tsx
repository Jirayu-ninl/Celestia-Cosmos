'use client'

// import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

import { ProjectList } from './project.list'

export const Project = () => {
  const routerOn = useSearchParams().get('routerOn')
  const initialDelay = 0.8
  return (
    <>
      {/* <AnimatePresence> */}
      {!routerOn && (
        <>
          <div
            // exit={{ y: 100, opacity: 0 }}
            // transition={{
            //   duration: 0.3,
            //   delay: 0.6,
            //   ease: [0.43, 0.13, 0.23, 0.96],
            // }}
            className='w-full pr-16 pt-2 xl:pt-4 el:w-[30vw] el:pt-8'
          >
            <div className='grid w-full grid-cols-6 gap-x-4 md:gap-x-12 xl:grid-cols-4 xl:gap-x-10 xl:gap-y-6 el:gap-x-12 el:gap-y-8 eel:grid-cols-6'>
              {ProjectList.map((V, i) => (
                <>
                  <Link
                    href={V.href}
                    className='Anim opacity-60 hover:opacity-100 dark:opacity-20 dark:hover:opacity-100'
                    aria-label={V.title}
                    key={i}
                  >
                    <AnimatedLogo
                      transitionDelay={0.1 * i + initialDelay}
                      className='h-4 fill-black hover:cursor-pointer dark:fill-white md:h-8'
                    >
                      <V.logo brandColor />
                    </AnimatedLogo>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </>
      )}
      {/* </AnimatePresence> */}
    </>
  )
}

const AnimatedLogo = ({
  children,
  className,
  transitionDelay,
}: {
  children: React.ReactNode
  className: string
  transitionDelay: number
}) => {
  return (
    <div
      className={clsx(className)}
      // initial={{ y: 20, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // exit={{ y: 20, opacity: 0 }}
      // transition={{
      //   duration: 0.3,
      //   delay: transitionDelay,
      //   ease: [0.43, 0.13, 0.23, 0.96],
      // }}
    >
      {children}
    </div>
  )
}

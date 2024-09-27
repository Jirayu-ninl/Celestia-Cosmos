'use client'

import type { Dispatch } from 'react'
import type { Variants } from './common'
import { motion } from 'framer-motion'
import { theme } from '@config'

export const Header = ({
  MenuSection,
  setMenuSection,
  _dark,
}: {
  MenuSection: number
  setMenuSection: Dispatch<number>
  _dark: boolean
}) => {
  const Color = theme.color
  const MenuItems = [
    { number: '01', name: 'Projects' },
    { number: '02', name: 'Dev Skills' },
    { number: '03', name: 'Expertises' },
    { number: '04', name: 'Certificates' },
    { number: '05', name: 'Teams' },
    { number: '06', name: 'Works' },
  ]

  const { parent, children } = {
    parent: (delay: number) => ({
      hidden: { visibility: 'hidden', y: 50, opacity: 0 },
      show: {
        visibility: 'visible',
        y: 0,
        opacity: 1,
        transition: {
          staggerChildren: delay,
        },
      },
    }),
    children: {
      hidden: { visibility: 'hidden', y: 50, opacity: 0 },
      show: { visibility: 'visible', y: 0, opacity: 1 },
    },
  }
  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  return (
    <>
      <motion.div
        variants={parent(0.5) as Variants}
        initial='hidden'
        animate='show'
        className='p-4 sm:p-7'
      >
        <motion.h1
          variants={children as Variants}
          className='xxl:text-7xl text-3xl font-bold text-primary sm:text-4xl lg:text-5xl'
        >
          Hello, I'm <br />
          Jirayu Ninlapun
        </motion.h1>
        <motion.p
          variants={children as Variants}
          className='xxl:mt-6 mt-2 text-1xs font-light sm:mt-6 md:text-xs lg:text-base xl:mt-2'
        >
          I work as an Interactive Web Developer and Designer.
          <br />
          To build the website, I mostly use NextJS, Prisma, and tRPC.
          <br />I specialize in Motion and WebGL to make websites come to life.
        </motion.p>
      </motion.div>
      <motion.div
        className='grid grid-cols-3 pb-0 md:block md:pb-6 [&>div:nth-child(4)>div]:rounded-bl-lg [&>div:nth-child(6)>div]:rounded-br-lg'
        variants={parent(0.2) as Variants}
        initial='hidden'
        animate='show'
        transition={{ delay: 0.5 }}
      >
        {MenuItems &&
          MenuItems.map((v: any, i: number) => (
            <motion.div
              variants={children as Variants}
              transition={transition}
              key={i}
            >
              <motion.div
                initial={{ color: 'hsl(var(--foreground))' }}
                exit={{ color: 'hsl(var(--foreground))' }}
                animate={
                  MenuSection === i
                    ? {
                        color: 'hsl(var(--primary))',
                      }
                    : { color: 'hsl(var(--foreground))' }
                }
                transition={transition}
                className='AnimOpacity-40 Anim relative flex cursor-pointer flex-col items-center bg-white/5 pb-2 pt-2 sm:pt-0 md:flex-row md:bg-transparent'
                style={MenuSection === i && { opacity: 1 }}
                onClick={() => setMenuSection(i)}
              >
                <motion.div
                  data-name='menu-indicator'
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: MenuSection === i ? 1 : 0 }}
                  className='absolute -left-[6px] top-[14px] -mt-1 mb-2 h-3 w-3 rounded-md bg-primary sm:relative sm:left-0 sm:top-px md:my-0 md:-ml-2 md:mr-3 md:w-5'
                />
                <p
                  className='-mb-px hidden w-4 sm:block'
                  data-name='menu-index'
                >
                  {v.number}
                </p>
                <motion.div
                  data-name='menu-line-separator'
                  initial={{
                    backgroundColor: 'hsl(var(--foreground))',
                    width: 16,
                  }}
                  exit={{
                    backgroundColor: 'hsl(var(--foreground))',
                    width: 16,
                  }}
                  animate={
                    MenuSection === i
                      ? {
                          backgroundColor: 'hsl(var(--primary))',
                          width: 32,
                        }
                      : {
                          backgroundColor: 'hsl(var(--foreground))',
                          width: 16,
                        }
                  }
                  className='Anim mx-3 hidden h-px w-6 md:block'
                />
                <p className='text-xs md:text-base' data-name='menu-title'>
                  {v.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
      </motion.div>
    </>
  )
}

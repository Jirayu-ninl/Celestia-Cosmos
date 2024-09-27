import type { StaticImageData } from 'next/image'
import React, { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ContentLayout } from '../components/contentLayout'

type FreeTimeItem = {
  title?: string
  header?: boolean
  coverImg?: StaticImageData
  tags?: { name: string; link: string }[]
  items?: { Title: string; Img: StaticImageData; Sub: string; Link: string }[]
}

interface FreeTimeSectionProps {
  data: FreeTimeItem[]
}

export const FreeTimeSection: React.FC<FreeTimeSectionProps> = ({ data }) => {
  useLayoutEffect(() => {
    if (window.innerWidth > 1199) {
      document.addEventListener('mousemove', onMouseMove)
      return () => {
        document.removeEventListener('mousemove', onMouseMove)
      }
    }
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const [Content, setContent] = useState<FreeTimeItem>({})

  const BigImg: any = useRef<HTMLDivElement>(null)

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    BigImg.current.style.transform = `translate3d(${8 + -clientX * 0.01}%, ${
      0 + (clientY - 150) * 0.005
    }%, 0px)`
  }

  const { animParent, animChildren } = {
    animParent: (delay: number) => ({
      hidden: { visibility: 'hidden', y: 100 },
      show: {
        visibility: 'visible',
        y: 0,
        transition: {
          staggerChildren: delay,
        },
      },
    }),
    animChildren: {
      hidden: { visibility: 'hidden', y: 100 },
      show: { visibility: 'visible', y: 0 },
    },
  }

  return (
    <>
      <div className='fixed bottom-48 flex w-screen flex-col items-center justify-end md:bottom-20'>
        <h1 className='xxl:text-4xl text-base font-bold md:text-2xl'>
          {Content.title}
        </h1>
      </div>
      <div className='absolute h-full w-screen overflow-hidden xl:w-[180%] xl:-translate-x-[20%]'>
        <motion.div
          variants={animParent(0.3) as any}
          initial='hidden'
          animate='show'
          ref={BigImg}
          className='absolute flex h-full w-full items-center justify-center'
        >
          <CoverImg
            data={data[0]}
            setContent={setContent}
            animChildren={animChildren}
          />
          <CoverImg
            data={data[1]}
            setContent={setContent}
            animChildren={animChildren}
          />
          <CoverImg
            data={data[2]}
            setContent={setContent}
            animChildren={animChildren}
          />
        </motion.div>
      </div>
      <div className='xxl:w-[1440px] mx-auto h-screen w-screen items-start overflow-hidden px-4 sm:container sm:px-0'>
        <ContentLayout
          title="What's my"
          subTitle='HOBBIES'
          icon
          className='-mt-36'
        />
      </div>
    </>
  )
}

const CoverImg = ({ data, setContent, animChildren }: any) => {
  return (
    <motion.div
      variants={animChildren}
      className='Anim relative mx-4 h-2/5 w-3/5 overflow-hidden rounded-md opacity-10 hover:opacity-100 md:mx-8 md:h-3/5'
      onMouseOver={() => setContent(data)}
    >
      <Image
        src={data.coverImg}
        layout='fill'
        objectFit='cover'
        blurDataURL={
          'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
        }
        quality={100}
        alt='TheIceJI Singles and Albums'
      />
    </motion.div>
  )
}

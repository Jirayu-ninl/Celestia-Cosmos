import Image from 'next/image'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { CSS } from './css'
import ImgFacts1 from 'public/page/about/Facts_1@2x.png'
import ImgFacts2 from 'public/page/about/Facts_2@2x.png'

import { ContentLayout } from '../components/contentLayout'

export function FactsSection({ _dark }: { _dark: boolean }) {
  const animConfig = {
    parent: (stagger: number, delay: number) => ({
      hidden: { visibility: 'hidden', y: 50, opacity: 0 },
      show: {
        visibility: 'visible',
        y: 0,
        opacity: 1,
        transition: {
          staggerChildren: stagger,
          delayChildren: delay,
        },
      },
    }),
    children: {
      hidden: { visibility: 'hidden', y: 50, opacity: 0 },
      show: { visibility: 'visible', y: 0, opacity: 1 },
    },
  }

  return (
    <div className='relative h-full w-full'>
      <div className='xxl:justify-center xxl:px-0 absolute right-0 flex h-full items-center justify-end pr-12'>
        <motion.div
          variants={animConfig.parent(0.3, 0.7) as any}
          initial='hidden'
          animate='show'
          className='xxl:w-full relative flex h-3/5 w-3/5 flex-col items-end md:h-3/4'
        >
          <motion.div
            variants={animConfig.children as any}
            className='xxl:right-32 relative right-20 overflow-hidden rounded-xl md:right-40'
          >
            <Image src={ImgFacts1} width={767} height={450} alt='IceJI Photo' />
          </motion.div>
          <motion.div
            variants={animConfig.children as any}
            className='xxl:-mt-24 -mt-8 overflow-hidden rounded-xl sm:-mt-20 md:-mt-12'
          >
            <Image src={ImgFacts2} width={447} height={450} alt='IceJI Photo' />
          </motion.div>
        </motion.div>
      </div>
      <ContentLayout title='Facts' subTitle='of me'>
        <motion.div
          variants={animConfig.parent(0.3, 1) as any}
          initial='hidden'
          animate='show'
          className={CSS}
        >
          <motion.div variants={animConfig.children as any}>
            <p>I despise </p>
            <h6>CODING</h6>
            <p> but adore when it makes the</p>
            <h5>world's DIFFERENCE.</h5>
          </motion.div>
          <motion.div variants={animConfig.children as any}>
            <p>I'm an</p> <h6>introvert</h6>
            <p>and</p> <h6>extrovert</h6> <p>at the</p>
            <h6>SAME TIME</h6>
          </motion.div>
          <motion.div variants={animConfig.children as any}>
            <p>I</p>
            <h6>CAN'T STOP</h6>
            <p>developing and amplifying </p>
            <h5>MY SKILLS.</h5>
          </motion.div>
          <motion.div variants={animConfig.children as any}>
            <p>I would like to</p>
            <h6>travel</h6>
            <p>and</p>
            <h6>explore</h6>
            <p>the world</p>
          </motion.div>
          <motion.div variants={animConfig.children as any}>
            <p>I not sure know what</p>
            <h6>impossible means</h6>
            <p>because it's only </p>
            <h5>POSSIBLE.</h5>
          </motion.div>
          <p></p>
          <motion.div variants={animConfig.children as any}>
            <h6>I always</h6>
            <p>do what I enjoy and</p>
            <h5>NEVER</h5>
            <p>stop doing it.</p>
          </motion.div>
        </motion.div>
      </ContentLayout>
    </div>
  )
}

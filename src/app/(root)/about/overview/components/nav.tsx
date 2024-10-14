import { Section } from '../common'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
// import { useShallow } from 'zustand/shallow'
import { useUiState, CURSOR } from '@/store'
import Arrow from './iconArrow'

export const Nav = ({ _section }: { _section: string | null }) => {
  const _setCursor = useUiState((st) => st.setCursor)
  const router = useRouter()

  const getSectionIndex = (section: string | null) => {
    switch (section) {
      case Section.FACTS:
        return 1
      case Section.HOBBIES:
        return 2
      case Section.MORE:
        return 3
      default:
        return 0
    }
  }
  const sectionIndex = getSectionIndex(_section)
  const setRouteChange = (next: string) => {
    router.push('?section=' + next)
  }

  const routeNext = () => {
    switch (_section) {
      case Section.FACTS:
        setRouteChange(Section.HOBBIES)
        return
      case Section.HOBBIES:
        setRouteChange(Section.MORE)
        return
      case Section.MORE:
        setRouteChange(Section.HERO)
        return
      default:
        setRouteChange(Section.FACTS)
        return
    }
  }

  const routePrev = () => {
    switch (_section) {
      case Section.MORE:
        setRouteChange(Section.HOBBIES)
        return
      case Section.HOBBIES:
        setRouteChange(Section.FACTS)
        return
      case Section.FACTS:
        setRouteChange(Section.HERO)
        return
      default:
        setRouteChange(Section.MORE)
        return
    }
  }

  const { animParent, animChildren } = {
    animParent: (delay: number) => ({
      hidden: { visibility: 'hidden', x: -150 },
      show: {
        visibility: 'visible',
        x: 0,
        transition: {
          staggerChildren: delay,
        },
      },
    }),
    animChildren: {
      hidden: { visibility: 'hidden', x: -150 },
      show: { visibility: 'visible', x: 0 },
    },
  }

  const transitionL = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  return (
    <motion.div
      variants={animParent(0.3) as any}
      initial='hidden'
      animate='show'
      className='xxl:left-8 fixed bottom-24 flex w-dvw flex-col justify-center xl:bottom-0 xl:left-4 xl:h-dvh xl:w-auto'
    >
      <div
        className='flex flex-row items-center justify-center xl:flex-col'
        onMouseEnter={() => _setCursor(CURSOR.LOGO)}
        onMouseMove={() => _setCursor(CURSOR.LOGO)}
        onMouseLeave={() => _setCursor(undefined)}
      >
        <motion.div
          variants={animChildren as any}
          onClick={() => routePrev()}
          className='Anim AnimOpacity-40 xxl:h-16 xxl:w-16 flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground bg-foreground/20 backdrop-blur-md backdrop-filter xl:h-12 xl:w-12'
        >
          <Arrow left />
        </motion.div>
        <motion.div
          variants={animChildren as any}
          onClick={() => routeNext()}
          className='Anim AnimOpacity-40 xxl:h-16 xxl:w-16 ml-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-foreground bg-foreground/20 backdrop-blur-md backdrop-filter xl:ml-0 xl:mt-3 xl:h-12 xl:w-12'
        >
          <Arrow />
        </motion.div>
      </div>
      <motion.div
        variants={animChildren as any}
        transition={{ delay: 1 }}
        className='flex items-center justify-center pt-4 xl:flex-col xl:pt-0'
      >
        <div className='xxl:my-16 hidden h-16 bg-foreground xl:relative xl:mx-auto xl:my-12 xl:block xl:rotate-0'>
          <motion.div
            initial={{ height: 16 }}
            exit={{ height: 16 }}
            animate={{ height: 16 * (sectionIndex + 1) }}
            transition={transitionL}
            className='absolute h-4 w-0.5 bg-foreground'
          ></motion.div>
          <div className='absolute h-16 w-0.5 bg-foreground/20'></div>
        </div>
        <p className='xl:rotate-90 xl:pr-4'>0{sectionIndex + 1}</p>
        <p className='opacity-40 xl:rotate-90'>/ 04</p>
      </motion.div>
    </motion.div>
  )
}

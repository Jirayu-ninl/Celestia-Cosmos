import { motion } from 'framer-motion'

const ScrollProgress = ({ motionValue }: any) => {
  return (
    <div className='fixed bottom-0 left-0 z-10 flex'>
      <motion.div
        style={{ x: motionValue }}
        className='bg-quaternary-2 dark:bg-primary-0 h-0.5 w-screen'
      ></motion.div>
    </div>
  )
}

export { ScrollProgress }

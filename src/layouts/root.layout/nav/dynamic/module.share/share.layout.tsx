import { motion } from 'framer-motion'

export const ShareItemLayout = ({
  children,
  title,
  index,
}: {
  children: React.ReactNode
  title: string
  index: number
}) => {
  const radius = -30
  return (
    <>
      <motion.div
        className='flex items-center space-x-4 text-foreground backdrop-blur-lg hover:text-background [&:hover>button]:bg-primary/90 [&:hover>p]:bg-primary/90 [&>button]:bg-background/90 [&>p]:bg-background/90'
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          rotateZ: index * 4,
          y: -index * 7,
          x: -radius + radius * Math.cos(index * 0.3),
        }}
        transition={{ delay: index * 0.05, ease: 'easeIn', duration: 0.3 }}
      >
        <p className='Anim rounded-md px-2 py-1 text-xs backdrop-blur-md'>
          {title}
        </p>
        <button
          className='Anim flex h-10 w-10 rounded-full backdrop-blur-md'
          key='Fs_facebook'
          type='button'
          title='facebook'
        >
          {children}
        </button>
      </motion.div>
    </>
  )
}

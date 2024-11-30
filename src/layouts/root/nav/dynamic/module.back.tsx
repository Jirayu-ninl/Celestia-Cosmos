import Link from 'next/link'
import { motion } from 'framer-motion'
import { DynamicNavBack } from '@/store'

import { Left } from '@components/icons'

interface BackModuleProps {
  dataState: DynamicNavBack
}

export const BackModule: React.FC<BackModuleProps> = ({
  dataState: _dataState,
}) => {
  return (
    <>
      <motion.div className='aspect-square cursor-pointer p-1'>
        <Link
          className='Anim flex h-full w-full rounded-full bg-foreground/[0.07] hover:bg-primary hover:text-background'
          href={_dataState.href}
        >
          <Left className='m-auto h-1/2 w-1/2' />
        </Link>
      </motion.div>
    </>
  )
}

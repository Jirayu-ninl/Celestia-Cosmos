import Link from 'next/link'
import { motion } from 'framer-motion'
import { DynamicNavExternal_link } from '@/store'

import { ExternalLink } from '@components/icons'

interface External_linkModuleProps {
  dataState: DynamicNavExternal_link
}

export const External_linkModule: React.FC<External_linkModuleProps> = ({
  dataState: _dataState,
}) => {
  return (
    <>
      <motion.div className='aspect-square cursor-pointer p-1'>
        <Link
          className='Anim flex h-full w-full rounded-full bg-foreground/[0.07] hover:bg-primary hover:text-background'
          href={_dataState.href}
        >
          <ExternalLink className='m-auto h-1/2 w-1/2' />
        </Link>
      </motion.div>
    </>
  )
}

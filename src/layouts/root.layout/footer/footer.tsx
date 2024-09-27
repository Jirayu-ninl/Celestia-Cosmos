'use client'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
// import { useShallow } from 'zustand/react/shallow'
import { useUiState, FOOTER } from '@/store'

// import { aFooter } from '@/config/config.animation'
import { ContactBlock, CreditBlock } from './components'

export default function Footer() {
  const _footer = useUiState((st) => st.footer)

  return (
    <>
      <AnimatePresence>
        {_footer && (
          <motion.div
            // initial={aFooter.initial}
            // exit={aFooter.exit}
            // animate={aFooter.animate}
            // transition={aFooter.transition(0)}
            className={clsx(
              _footer === FOOTER.DEFAULT && 'fixed',
              'bottom-0 left-0 z-10 hidden w-screen flex-col items-center justify-between px-5 py-3 sm:flex sm:flex-row',
              _footer === FOOTER.BLUR_BG && 'blur-md',
            )}
          >
            <ContactBlock />
            <CreditBlock />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

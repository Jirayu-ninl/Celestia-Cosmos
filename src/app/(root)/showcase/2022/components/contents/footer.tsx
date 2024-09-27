import React from 'react'
import { motion } from 'framer-motion'
import { ANIM_CONSTANTS } from '@constants'
import { useUiState, MODAL } from '@/store'

export function Footer() {
  const _onToggleModal = useUiState((st) => st.onToggleModal)

  return (
    <div className='fixed bottom-0 left-0 flex flex-col items-center justify-center px-5 py-3'>
      <div className='mt-2 flex items-center text-xs md:mt-0 md:text-base'>
        <motion.p
          initial={{ visibility: 'hidden', y: 100 }}
          animate={{ visibility: 'visible', y: 0 }}
          transition={{ duration: 0.5, ease: ANIM_CONSTANTS.EASE.AW }}
        >
          <a
            className='Anim AnimOpacity-60 cursor-pointer pr-2'
            onClick={() => {
              _onToggleModal(MODAL.APP_INFO)
            }}
          >
            TheIceJI Next
          </a>
          <span className='opacity-40'>
            | Copyright©{new Date().getFullYear()} by{' '}
          </span>
          <a href='http://TheIceJI.com/home' className='Anim AnimOpacity-60'>
            Jirayu Ninlapun
          </a>
        </motion.p>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { useShallow } from 'zustand/react/shallow'
import { useUiState, MODAL } from '@/store'

export default function CreditText() {
  const [_modal, _onToggleModal] = useUiState(
    useShallow((st) => [st.modal, st.onToggleModal]),
  )

  return (
    <div className='mt-2 flex items-center text-xs md:mt-0 md:text-base'>
      <motion.p
      // initial={aFooter.initial}
      // animate={aFooter.animate}
      // transition={aFooter.transition(0.2)}
      >
        <button
          className='Anim AnimOpacity-60 cursor-pointer pr-2'
          onClick={() => {
            _onToggleModal(MODAL.APP_INFO)
          }}
        >
          TheIceJi Cosmos
        </button>
        <span className='hidden pr-1 opacity-40 md:inline-flex'>
          | Copyright©{new Date().getFullYear()} by
        </span>
        <a
          href='http://TheIceJI.com/home'
          className='Anim AnimOpacity-60 hidden md:inline-flex'
        >
          Jirayu Ninlapun
        </a>
      </motion.p>
    </div>
  )
}

import { MODAL, CURSOR } from '@/store'
import { IceJiLogo } from '@components/logo/IceJi'

interface ShortcutSectionProps {
  _setCursor: (cursor: CURSOR | undefined) => void
  _onToggleModal: (modal: MODAL) => void
}

export const Logo: React.FC<ShortcutSectionProps> = ({
  _setCursor,
  _onToggleModal,
}) => {
  return (
    <>
      <div
        className='Anim flex aspect-square w-full cursor-pointer items-center rounded-t-md bg-primary p-2 lg:p-2 el:p-3'
        onMouseEnter={() => {
          _setCursor(CURSOR.LOGO)
        }}
        onMouseLeave={() => {
          _setCursor(undefined)
        }}
        onClick={() => {
          _onToggleModal(MODAL.APP_INFO)
          _setCursor(undefined)
        }}
      >
        <IceJiLogo />
      </div>
    </>
  )
}

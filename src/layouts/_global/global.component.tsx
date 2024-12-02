import { Toast } from '@core/view/toast'
import { CreateProgress } from './nprogress'
import { theme } from '@config'
import { Modal } from './modal'

export const GlobalComponent = () => {
  return (
    <>
      <CreateProgress color={theme.color.primary} />
      <Toast />
      <Modal />
    </>
  )
}

import { ButtonBlockProps } from './button.common'
import { POST } from '@/enums/content'
import clsx from 'clsx'
import { ButtonItem } from './button.item'

export const ButtonBlock: React.FC<ButtonBlockProps> = ({ button }) => {
  return (
    <>
      <div className='container xl:w-[1024px]'>
        {button.title && <h6 className='font-bold'>{button.title}</h6>}
        {button.description && (
          <p className='opacity-60'>{button.description}</p>
        )}
        <div
          className={clsx(
            '_post-button',
            button.buttonAlign === POST.BUTTON_ALIGN.HORIZONTAL
              ? 'align-horizontal'
              : 'align-vertical',
          )}
        >
          {button.buttonItems.map((button, index) => (
            <ButtonItem button={button} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

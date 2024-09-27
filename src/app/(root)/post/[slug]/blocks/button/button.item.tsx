import type { PostBlock } from '@types'
import Link from 'next/link'
// import { ButtonIcon } from './icon'
import { ButtonIcons } from './icons'

export const ButtonItem = ({ button }: { button: PostBlock.ButtonItem }) => {
  const Icon = ButtonIcons({ Icon: button.icon })

  return (
    <>
      <Link href={button.url}>
        <button className='_post-button-item Anim'>
          <div>
            <Icon className='m-auto text-3xl' />
          </div>
          <div>
            <strong>{button.title}</strong>
            {button.description && <p>{button.description}</p>}
          </div>
        </button>
      </Link>
    </>
  )
}

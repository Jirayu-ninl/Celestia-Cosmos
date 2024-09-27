import type { PostBlock } from '@types'
import { POST } from '@/enums'

interface SeparatorBlockProps {
  separator: PostBlock.SeparatorBlock
}

export const SeparatorBlock: React.FC<SeparatorBlockProps> = ({
  separator,
}) => {
  switch (separator.separatorType) {
    case POST.SEPARATOR.DOT:
      return (
        <div className='_post-separator-dot'>
          <p>...</p>
        </div>
      )
    case POST.SEPARATOR.LINE_SM:
      return <div className='_post-separator-lineSm' />
    case POST.SEPARATOR.LINE_XL:
      return <div className='_post-separator-lineXl' />
    case POST.SEPARATOR.JUST_PADDING:
      return <div className='h-24 w-full' />
    default:
      return null
  }
}

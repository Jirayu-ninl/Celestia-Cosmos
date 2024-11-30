import type { PostBlock } from 'types'
import { POST } from '@/enums/content'
import { Richtext } from '../common'

interface QuoteBlockProps {
  quote: PostBlock.QuoteBlock
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote }) => {
  switch (quote.quoteType) {
    case POST.QUOTE.BLOCK:
      return (
        <>
          <blockquote>
            <Richtext richtext={quote.content} />
          </blockquote>
        </>
      )
    case POST.QUOTE.RICH:
      return (
        <>
          <div className='_post-quote-rich'>
            <Richtext richtext={quote.content} />
          </div>
        </>
      )
    default:
      return null
  }
}

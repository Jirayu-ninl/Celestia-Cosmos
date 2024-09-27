import type { ProjectBlock } from '@types'
import { sanitize } from 'isomorphic-dompurify'
import { QuoteLeft, QuoteRight } from '@components/icons'

interface QuoteBlockProps {
  quote: ProjectBlock.QuoteBlock
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote }) => {
  const sanitizedHtml = sanitize(quote.text.html)
  return (
    <>
      <div className='_project-quote container relative'>
        <div className='absolute left-0 top-0 flex h-full w-full justify-between text-5xl opacity-20 lg:text-7xl'>
          <QuoteLeft />
          <QuoteRight className='mt-auto' />
        </div>
        <h6 dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
      </div>
    </>
  )
}

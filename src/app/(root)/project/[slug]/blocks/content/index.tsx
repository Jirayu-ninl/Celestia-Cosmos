import type { ProjectBlock } from 'types'
import { sanitize } from 'isomorphic-dompurify'

interface ContentBlockProps {
  content: ProjectBlock.ContentBlock
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ content }) => {
  const sanitizedHtml = sanitize(content.content.html)
  return (
    <>
      <div className='_project-content container'>
        <h2>
          <span>/{content.number}</span>
          {content.title}
        </h2>
        <div
          className='mt-4 md:-mt-2 md:w-9/12 lg:w-3/5'
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      </div>
    </>
  )
}

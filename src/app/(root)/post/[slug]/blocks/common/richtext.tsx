import type { PostBlock } from '@types'
import { sanitize } from 'isomorphic-dompurify'

export const Richtext = ({ richtext }: { richtext: PostBlock.RichText }) => {
  if (!richtext.html) return <p>undefinded</p>
  const sanitizedHtml = sanitize(richtext.html)
  return (
    <>
      <div
        className='_post-content-text'
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </>
  )
}

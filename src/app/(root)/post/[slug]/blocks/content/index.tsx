import type { PostBlock } from '@types'
import { POST } from '@/enums'
import clsx from 'clsx'
import { Richtext, Heading } from '../common'

interface ContentBlockProps {
  content: PostBlock.ContentBlock
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ content }) => {
  return (
    <div
      className={clsx(
        '_post-content container px-4 xl:w-[1024px]',
        content.headingHierarchy ===
          (POST.HEADING_HIERARCHY.FOUR || POST.HEADING_HIERARCHY.FIVE) &&
          'pl-8 lg:pl-16',
        content.headingHierarchy === POST.HEADING_HIERARCHY.SIX &&
          'pl-12 lg:pl-24',
      )}
    >
      <Heading
        title={content.title}
        headingHierarchy={content.headingHierarchy}
      />
      {content.text &&
        content.text.map((richtext) => <Richtext richtext={richtext} />)}
    </div>
  )
}

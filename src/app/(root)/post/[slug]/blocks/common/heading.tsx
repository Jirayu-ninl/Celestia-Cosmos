import { POST } from '@/enums'

export const Heading = ({
  title,
  headingHierarchy,
}: {
  title: string | null
  headingHierarchy: `${POST.HEADING_HIERARCHY}`
}) => {
  if (!title) return <></>
  if (headingHierarchy === POST.HEADING_HIERARCHY.NONE)
    return <p className='font-semibold uppercase'>{title}</p>
  const Tag = headingHierarchy
  return <Tag className='font-semibold'>{title}</Tag>
}

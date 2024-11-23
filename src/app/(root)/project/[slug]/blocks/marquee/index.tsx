import { MarqueeBlockProps } from './marquee.common'
import { PROJECT } from '@/enums/content'
import { AutoMarquee } from './marquee.auto'
import { ScrollingMarquee } from './marquee.scrolling'

export const MarqueeBlock: React.FC<MarqueeBlockProps> = (props) => {
  switch (props.marquee.marqueeType) {
    case PROJECT.MARQUEE.AUTO:
      return <AutoMarquee {...props} />
    case PROJECT.MARQUEE.SCROLLING:
      return <ScrollingMarquee {...props} />
    default:
      return null
  }
}

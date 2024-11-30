import type { ProjectBlock } from 'types'
import { PROJECT } from '@/enums/content'
import { ContentBlock } from './content'
import { ImageBlock } from './image'
import { ColorBlock } from './color'
import { VideoBlock } from './video'
import { GridBlock } from './grid'
import { MarqueeBlock } from './marquee'
import { QuoteBlock } from './quote'

export const renderBlock = (block: ProjectBlock.Block, isPreview: boolean) => {
  switch (block.blockType) {
    case PROJECT.BLOCK_TYPE.CONTENT:
      return <ContentBlock content={block as ProjectBlock.ContentBlock} />
    case PROJECT.BLOCK_TYPE.IMAGE:
      return (
        <ImageBlock
          image={block as ProjectBlock.ImageBlock}
          isPreview={isPreview}
        />
      )
    case PROJECT.BLOCK_TYPE.COLOR_PALETTE:
      return (
        <ColorBlock colorPalette={block as ProjectBlock.ColorPaletteBlock} />
      )
    case PROJECT.BLOCK_TYPE.VIDEO:
      return <VideoBlock video={block as ProjectBlock.VideoBlock} />
    case PROJECT.BLOCK_TYPE.GRID:
      return <GridBlock grid={block as ProjectBlock.GridBlock} />
    case PROJECT.BLOCK_TYPE.MARQUEE:
      return <MarqueeBlock marquee={block as ProjectBlock.MarqueeBlock} />
    case PROJECT.BLOCK_TYPE.QUOTE:
      return <QuoteBlock quote={block as ProjectBlock.QuoteBlock} />
    default:
      return null
  }
}

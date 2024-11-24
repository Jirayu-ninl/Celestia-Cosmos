import type { Raw } from '../content'
import { PROJECT } from '@/enums/content'

export type RichText = {
  html: string
  raw?: Raw
}

export type ContentBlock = {
  blockType: `${PROJECT.BLOCK_TYPE.CONTENT}`
  number: string
  title: string
  content: RichText
}

export type ImageBlock = {
  blockType: `${PROJECT.BLOCK_TYPE.IMAGE}`
  title: string | null
  description: string | null
  imageType: `${PROJECT.IMAGE}`
  images: {
    url: string
    width: number
    height: number
    mimeType?: string
  }[]
  fillColor: {
    hex: string
  } | null
}

export type VideoBlock = {
  blockType: `${PROJECT.BLOCK_TYPE.VIDEO}`
  title: string | null
  source: `${PROJECT.VIDEO_SRC}`
  url: string
}

export type Color = {
  hex: string
  name: string
  textColor?: string
}

export type ColorPaletteBlock = {
  blockType: `${PROJECT.BLOCK_TYPE.COLOR_PALETTE}`
  colorPaletteType: `${PROJECT.COLOR_PALETTE}`
  color: Color[]
}

export type GridItem = {
  icon?: string
  title?: string
  subtitle?: string
  description?: string
}

export type GridBlock = {
  blockType: `${PROJECT.BLOCK_TYPE.GRID}`
  title: string | null
  gridType: `${PROJECT.GRID}`
  items: GridItem[]
}

export type MarqueeBlock = {
  blockType: `${PROJECT.BLOCK_TYPE.MARQUEE}`
  marqueeType: `${PROJECT.MARQUEE}`
  line: number
  rotate: boolean
  word: string[]
  separator: string | null
}

export type QuoteBlock = {
  blockType: `${PROJECT.BLOCK_TYPE.QUOTE}`
  text: RichText
}

export type Block =
  | ContentBlock
  | ImageBlock
  | ColorPaletteBlock
  | VideoBlock
  | GridBlock
  | MarqueeBlock
  | QuoteBlock

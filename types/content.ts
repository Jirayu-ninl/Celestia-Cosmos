export type TextContent = { bold?: boolean; text: string }
export type ImageContent = {
  type: string
  src: string
  altText: string
  height: number
  width: number
  handle?: string
  mimeType?: string
  children?: Content[]
}

export type Content =
  | {
      type?: string
      className?: string
      children: TextContent[] | ImageContent[] | Content[]
    }
  | ImageContent

export type Raw = {
  children: Content[]
}

export type RawContent = {
  children: TextContent[] | ImageContent[] | Content[]
}

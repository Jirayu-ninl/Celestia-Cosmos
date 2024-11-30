import type { PostBlock } from 'types'
import React from 'react'
import { renderBlock } from './renderBlock'

interface SectionsProps {
  blocks: PostBlock.Block[]
  isPreview: boolean
}

export const Blocks: React.FC<SectionsProps> = ({ blocks, isPreview }) => {
  return (
    <>
      {blocks.map((block, index) => (
        <React.Fragment key={index}>
          {renderBlock(block, isPreview)}
        </React.Fragment>
      ))}
    </>
  )
}

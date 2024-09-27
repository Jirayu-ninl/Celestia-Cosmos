import type { ProjectBlock } from '@types'
import React from 'react'
import { renderBlock } from './renderBlock'

interface SectionsProps {
  blocks: ProjectBlock.Block[]
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

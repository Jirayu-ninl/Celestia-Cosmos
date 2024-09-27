'use client'

import { css } from '@emotion/css'
import { _projectTag } from './tag.css'
import { _projectInfo } from './projectInfo.css'
import {
  _blockContent,
  _blockImage,
  _blockVideo,
  _blockColor,
  _blockGrid,
  _blockQuote,
  _blockMarquee,
} from './block.css'
import { _relatedProject } from './relatedProject.css'

export const CSS = css`
  ${_projectTag}
  ${_projectInfo}
  ${_blockContent}
  ${_blockImage}
  ${_blockVideo}
  ${_blockColor}
  ${_blockGrid}
  ${_blockQuote}
  ${_blockMarquee}
  ${_relatedProject}
`

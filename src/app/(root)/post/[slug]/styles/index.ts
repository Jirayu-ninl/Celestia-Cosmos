'use client'

import { css } from '@emotion/css'
export { _postTag } from './tag.css'
import { _postContent } from './postContent.css'
import { _blockCode } from './block.code.css'
import { _blockSeparator } from './block.separator.css'
import { _blockButton } from './block.button.css'
import { _relatedPost } from './relatedPost.css'

export const CSS = css`
  ${_postContent}
  ${_blockSeparator}
  ${_blockCode}
  ${_blockButton}
  ${_relatedPost}
`

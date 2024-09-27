'use client'

import { css } from '@emotion/css'

export const _blockCode = css`
  ._post-code {
    padding: 0.5rem;
    h6 {
      margin-bottom: 0.5rem /* 8px */;
      font-weight: 700;
    }
    div {
      border-radius: calc(var(--radius));
      padding: 0.25rem 0.75rem;
    }
    @media (min-width: 1200px) {
      padding: 1.5rem /* 24px */;
    }
  }
`

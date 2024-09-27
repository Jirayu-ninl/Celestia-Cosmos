'use client'

import { css } from '@emotion/css'

export const _blockQuote = css`
  ._project-quote {
    padding: 2rem 0 1rem 1.5rem;
    h6 {
      text-indent: 3rem;
      font-size: 2rem /* 32px */;
      line-height: 2.5rem /* 40px */;
      font-weight: 300;
      font-style: italic;
    }
    @media (min-width: 992px) {
      padding: 3rem 0 1.5rem 3rem;
      h6 {
        text-indent: 6rem;
        font-size: 3rem /* 48px */;
        line-height: 4rem /* 64px */;
      }
    }
  }
`

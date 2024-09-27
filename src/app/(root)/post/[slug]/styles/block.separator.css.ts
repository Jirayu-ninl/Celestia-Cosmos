'use client'

import { css } from '@emotion/css'

export const _blockSeparator = css`
  ._post-separator-dot {
    padding: 24px 0px;
    & > p {
      font-size: 4rem;
    }
  }
  ._post-separator-lineSm {
    height: 0.25rem;
    width: 6rem;
    margin: 3rem 0;
    border-radius: 99px;
    background-color: hsl(var(--primary));
  }
  ._post-separator-lineXl {
    height: 1px;
    width: 70%;
    margin: 3rem 0;
    border-radius: 99px;
    background-color: hsl(var(--foreground) / 0.4);
    @media (min-width: 1200px) {
      width: 800px;
    }
  }
`

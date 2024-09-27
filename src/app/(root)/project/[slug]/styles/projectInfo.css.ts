'use client'

import { css } from '@emotion/css'

export const _projectInfo = css`
  ._project-info-inlineGrid {
    margin: 6rem auto 0 auto /* 96px */;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem /* 16px */;
    & > div {
      border: 1px solid hsl(var(--primary));
      border-radius: calc(var(--radius) - 2px);
      background-color: hsl(var(--background-deep) / 0.6);
      padding: 0.5rem 0 /* 8px */;
      h4 {
        font-weight: 700;
        color: hsl(var(--primary));
      }
      h4,
      p,
      a {
        text-align: center;
        font-size: 0.75rem /* 12px */;
        line-height: 1rem /* 16px */;
      }
      &:hover {
        background-color: hsl(var(--primary));
        color: hsl(var(--background));
        // cursor: pointer;
        h4 {
          color: hsl(var(--background));
        }
      }
    }
    @media (min-width: 480px) {
      & > div {
        h4,
        p,
        a {
          font-size: 1rem /* 16px */;
          line-height: 1.5rem /* 24px */;
        }
      }
    }
    @media (min-width: 768px) {
      margin: 12rem auto 6rem auto;
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 2rem /* 32px */;
      & > div {
        padding: 1rem 0 /* 16px */;
      }
    }
  }
`

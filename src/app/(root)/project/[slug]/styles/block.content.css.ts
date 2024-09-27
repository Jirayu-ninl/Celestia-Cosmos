'use client'

import { css } from '@emotion/css'

export const _blockContent = css`
  ._project-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8rem 0;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    h2 {
      font-size: 1rem /* 16px */;
      line-height: 1.5rem /* 24px */;
      font-weight: 600;
      text-transform: uppercase;
      & > span {
        padding-right: 0.5rem /* 8px */;
        font-size: 0.75rem /* 12px */;
        line-height: 1rem /* 16px */;
        color: hsl(var(--primary));
      }
    }
    h3 {
      font-size: 1.875rem /* 30px */;
      line-height: 2.25rem /* 36px */;
      font-weight: 600;
      margin-bottom: 1.5rem /* 24px */;
      &:not(:first-child) {
        padding-top: 4rem;
      }
    }
    p {
      margin-top: 0.25rem;
      font-weight: 300;
      opacity: 0.8;
      text-indent: 3rem /* 48px */;
      & + p:not(:first-child) {
        padding-top: 0rem;
      }
    }
    ul {
      margin-top: 1.5rem /* 24px */;
      & > li {
        font-weight: 300;
        color: hsl(var(--foreground) / 0.8);
        position: relative;
        strong {
          font-weight: 500;
          color: hsl(var(--foreground));
        }
        &:before {
          content: '';
          position: absolute;
          height: 6px;
          width: 6px;
          left: -14px;
          top: 50%;
          transform: translate(0, -50%);
          border-radius: 1.5px;
          background-color: hsl(var(--primary));
        }
      }
    }
  }
`

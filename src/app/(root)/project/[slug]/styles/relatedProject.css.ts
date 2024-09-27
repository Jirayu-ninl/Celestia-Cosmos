'use client'

import { css } from '@emotion/css'

export const _relatedProject = css`
  ._project-relatedProject {
    padding-top: 4rem /* 64px */;
    padding-bottom: 12rem /* 192px */;
    // h5 {
    //   // Title
    //   margin-bottom: 3.5rem /* 56px */;
    //   font-weight: 600;
    // }
  }
  ._project-relatedProject-item {
    position: relative;
    margin-top: -3rem /* -48px */;
    height: 12rem /* 192px */;
    cursor: pointer;
    overflow: hidden;
    border-radius: calc(var(--radius) - 2px);
    & > div:first-child {
      position: absolute;
      left: 1rem /* 16px */;
      top: 1rem /* 16px */;
      z-index: 10;
      h5 {
        font-size: 2rem /* 32px */;
        line-height: 2.5rem /* 40px */;
        margin-bottom: 0.5rem /* 8px */;
        font-weight: 700;
        color: white;
      }
      button {
        margin-right: 0.5rem /* 8px */;
        border-radius: 0.25rem /* 4px */;
        border-width: 1px;
        border-color: rgb(255 255 255 / 0.4);
        background-color: rgb(255 255 255 / 0.2);
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem /* 12px */;
        line-height: 1rem /* 16px */;
        text-transform: uppercase;
        color: white;
        &:hover {
          color: hsl(var(--background));
          background-color: hsl(var(--primary));
        }
      }
    }
  }
`

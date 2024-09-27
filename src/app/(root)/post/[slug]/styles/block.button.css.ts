'use client'

import { css } from '@emotion/css'

export const _blockButton = css`
  ._post-button {
    display: flex;
    margin-top: 0.5rem /* 8px */;
  }
  ._post-button.align-vertical {
    flex-direction: column;
    & > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(0.5rem /* 8px */ * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(0.5rem /* 8px */ * var(--tw-space-y-reverse));
    }
  }
  ._post-button.align-horizontal {
    & > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(0.5rem /* 8px */ * var(--tw-space-x-reverse));
      margin-left: calc(0.5rem /* 8px */ * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  ._post-button-item {
    display: flex;
    align-items: center;
    border-radius: calc(var(--radius) - 2px);
    border-width: 1px;
    border-color: hsl(var(--foreground) / 0.6);
    padding: 0.25rem 0.5rem /* 4px 8px */;
    opacity: 0.8;
    &:hover {
      background-color: hsl(var(--primary));
      color: hsl(var(--background));
      opacity: 1;
      transform: translate(-0.25rem, -0.25rem);
    }
    & > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(0.5rem /* 8px */ * var(--tw-space-x-reverse));
      margin-left: calc(0.5rem /* 8px */ * calc(1 - var(--tw-space-x-reverse)));
    }
    & > div:first-child {
      display: flex;
      aspect-ratio: 1 / 1;
      height: 100%;
    }
    & > div:nth-child(2) {
      text-align: left;
      & > p {
        font-size: 0.75rem /* 12px */;
        line-height: 1rem /* 16px */;
        opacity: 0.6;
      }
    }
  }
`

'use client'

import { css } from '@emotion/css'
import { keyframes } from '@emotion/react'

const marqueeAnim = keyframes`
100% {
  transform: translate3d(-10%, 0, 0);
}
`

export const _blockMarquee = css`
  ._project-marquee {
    pointer-events: none;
    height: 8rem /* 128px */;
    width: 100%;
    margin: 4rem 0;
    & span {
      opacity: 0.25;
      padding-left: 1.5rem /* 24px */;
      padding-right: 1.5rem /* 24px */;
    }
    & > div {
      height: 8rem;
      width: fit-content;
      align-items: center;
      display: flex;
      position: relative;
      // animation: ${marqueeAnim} 15s linear infinite;
      will-change: transform;
      border-width: 1px;
      border-color: rgb(255 255 255 / 0);
      border-top-color: hsl(var(--primary));
      border-bottom-color: hsl(var(--primary));
      background-color: hsl(var(--foreground) / 0.05);
      font-size: 6vh;
      font-weight: 700;
      text-transform: uppercase;
      --tw-backdrop-blur: blur(16px);
      -webkit-backdrop-filter: var(--tw-backdrop-blur)
        var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
        var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate)
        var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
        var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
      backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
        var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
        var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
        var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
        var(--tw-backdrop-sepia);
    }
    @media (min-width: 768px) {
      & span {
        padding-left: 2rem /* 32px */;
        padding-right: 2rem /* 32px */;
      }
    }
    @media (min-width: 1200px) {
      height: 12rem /* 192px */;
      & span {
        padding-left: 3rem /* 48px */;
        padding-right: 3rem /* 48px */;
      }
      & > div {
        font-size: 6vw;
      }
    }
    @media (min-width: 2560px) {
      & span {
        padding-left: 4rem /* 64px */;
        padding-right: 4rem /* 64px */;
      }
    }
  }
  ._project-marquee-rotate {
    --tw-rotate: -7deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
`

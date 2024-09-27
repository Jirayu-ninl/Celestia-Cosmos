'use client'

import { css } from '@emotion/css'

const _container = css`
  position: relative;
  overflow: hidden;
  border-radius: 1rem /* 16px */;
`

const _colorInfo = css`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
  @media (min-width: 768px) {
    padding: 1rem 0;
  }
`

const _colorCode = css`
  pointer-events: none;
  border-radius: calc(var(--radius) - 2px);
  border-width: 1px;
  padding: 0 0.5rem;
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  font-weight: 300;
  opacity: 0.6;
  @media (min-width: 768px) {
    font-size: 1rem /* 16px */;
    line-height: 1.5rem /* 24px */;
  }
`

const _colorName = css`
  margin-top: 0.5rem /* 8px */;
  font-size: 1rem /* 16px */;
  line-height: 1.5rem /* 24px */;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  @media (min-width: 768px) {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
  }
`

export const _blockColor = css`
  ._project-color {
    margin-top: 6rem 0;
    display: grid;
    height: 500px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem /* 32px */;
    @media (min-width: 768px) {
      height: 300px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (min-width: 1200px) {
      height: 400px;
    }
  }
  ._project-color-minimal {
    ${_container}
    & > div {
      ${_colorInfo}
      button {
        ${_colorCode}
      }
      p {
        ${_colorName}
      }
    }
  }
  ._project-color-default {
    ${_container}
    & > div {
      ${_colorInfo}
      background-color: rgb(255 255 255 / 0.6);
      backdrop-filter: blur(12px);
      button {
        ${_colorCode}
      }
      p {
        ${_colorName}
      }
    }
  }
`

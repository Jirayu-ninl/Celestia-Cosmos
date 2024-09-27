import { css } from '@emotion/css'

export const _postTag = css`
  ._post-tag {
    margin-right: 0.5rem /* 8px */;
    margin-top: 0.5rem /* 8px */;
    border-radius: calc(var(--radius) - 2px);
    // color: #ffffff;
    border-width: 1px;
    border-color: hsl(var(--foreground) / 0.4);
    // border-color: #ffffff66;
    padding: 0.25rem 1rem;
    text-transform: uppercase;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    @media (min-width: 1200px) {
      &:hover {
        background-color: hsl(var(--primary));
        color: hsl(var(--background));
        transition-duration: 200ms;
        --tw-translate-y: -0.25rem /* -4px */;
        --tw-translate-x: -0.25rem /* -4px */;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y));
      }
    }
  }
`

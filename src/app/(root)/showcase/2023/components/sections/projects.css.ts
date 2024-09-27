import { css } from '@emotion/css'

export const CSS = css`
  cursor: pointer;
  transition-duration: 500ms;
  & > h3 {
    -webkit-text-stroke: 2px hsl(var(--foreground));
    // color: transparent;
  }
  &:hover {
    transition-duration: 250ms;
    & > h3 {
      color: hsl(var(--foreground));
      -webkit-text-stroke: 2px transparent;
      transition-duration: 250ms;
      // transform: translateX(3%) scaleX(1.05);
      & > span {
        color: hsl(var(--primary));
      }
    }
  }
`

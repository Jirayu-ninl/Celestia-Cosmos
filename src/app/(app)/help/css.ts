import { css } from '@emotion/css'

const CSS = css`
  p {
    padding: 12px 0;
    font-size: 0.75rem;
    line-height: 2rem;
    opacity: 0.8;
    font-weight: light;
    color: hsl(var(--foreground) / 0.9);
    @media (min-width: 768px) {
      padding: 20px 0;
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
  strong {
    font-weight: bold;
    color: hsl(var(--primary));
  }
  b {
    font-weight: bold;
    color: hsl(var(--foreground) / 0.8);
  }
  h2 {
    padding-top: 3rem;
    font-size: 1.25rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  ul {
    padding-left: 3rem;
  }
  li {
    position: relative;
    font-size: 0.75rem;
    line-height: 1.75rem;
    opacity: 0.8;
    padding-bottom: 1rem;
    color: hsl(var(--foreground) / 0.6);
    @media (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }
  li:before {
    content: '';
    position: absolute;
    height: 4px;
    width: 4px;
    border-radius: 6px;
    background-color: white;
    top: 7px;
    left: -12px;
    @media (min-width: 768px) {
      height: 6px;
      width: 6px;
      top: 12px;
      left: -14px;
    }
  }
`

export { CSS }

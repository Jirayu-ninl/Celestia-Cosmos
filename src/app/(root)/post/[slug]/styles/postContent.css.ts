import { css } from '@emotion/css'
import { _postTag } from './tag.css'

export const _postContent = css`
  blockquote {
    margin: 1.5rem 0 /* 24px */;
    border-left-color: hsl(var(--primary));
    border-radius: calc(var(--radius) - 2px);
    border-width: 4px;
    border-top-color: rgb(255 255 255 / 0);
    border-bottom-color: rgb(255 255 255 / 0);
    border-right-color: rgb(255 255 255 / 0);
    background-color: hsl(var(--foreground) / 0.07);
    padding: 1.5rem /* 24px */;
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    font-weight: 300;
    @media (min-width: 992px) {
      margin-top: 3rem /* 48px */;
      margin-bottom: 3rem /* 48px */;
      font-size: 1.5rem /* 24px */;
      line-height: 2rem /* 32px */;
      line-height: 2.5rem /* 40px */;
    }
    @media (min-width: 1200px) {
      width: 1024px;
    }
  }
  ${_postTag}
  ._post-utils-no_indent {
    text-indent: 0px !important;
  }
  ._post-content {
    h2,
    h3,
    h4,
    h5,
    h6 {
      // text-transform: uppercase;
      font-weight: 600;
    }
    h2 {
      padding-bottom: 1rem /* 16px */;
      padding-top: 4rem /* 64px */;
      font-size: 1.875rem /* 30px */;
      line-height: 2.25rem /* 36px */;
      @media (min-width: 992px) {
        padding-top: 6rem /* 96px */;
        font-size: 3rem /* 48px */;
        line-height: 1;
      }
    }
    h3 {
      padding-bottom: 1rem /* 16px */;
      padding-top: 4rem /* 64px */;
      font-size: 1.5rem /* 24px */;
      line-height: 2rem /* 32px */;
      @media (min-width: 992px) {
        padding-top: 6rem /* 96px */;
        font-size: 2.25rem /* 36px */;
        line-height: 2.5rem /* 40px */;
      }
    }
    h4 {
      padding-bottom: 1rem /* 16px */;
      padding-top: 4rem /* 64px */;
      font-size: 1.25rem /* 20px */;
      line-height: 1.75rem /* 28px */;
      @media (min-width: 992px) {
        padding-top: 6rem /* 96px */;
        font-size: 1.875rem /* 30px */;
        line-height: 2.25rem /* 36px */;
      }
    }
    h5 {
      padding-top: 1rem /* 16px */;
      padding-bottom: 1rem /* 16px */;
      padding-left: 1rem /* 16px */;
      font-size: 1.125rem /* 18px */;
      line-height: 1.75rem /* 28px */;
      @media (min-width: 992px) {
        padding-top: 2rem /* 32px */;
        padding-bottom: 2rem /* 32px */;
        padding-left: 2rem /* 32px */;
        font-size: 1.25rem /* 20px */;
        line-height: 1.75rem /* 28px */;
      }
    }
    h6 {
      padding-top: 2rem /* 32px */;
      padding-bottom: 2rem /* 32px */;
      padding-left: 2rem /* 32px */;
      @media (min-width: 992px) {
        font-size: 1.125rem /* 18px */;
        line-height: 1.75rem /* 28px */;
      }
    }
    a {
      opacity: 0.6;
      text-decoration: underline;
      transition-duration: 450ms;
      &:hover {
        opacity: 1;
        color: hsl(var(--primary));
        transition-duration: 200ms;
      }
    }
    img {
      margin: 24px auto;
      border-radius: 1rem;
    }
    ul {
      padding: 0.75rem 0 0.75rem 2rem;
      & + p {
        /* First text after ul */
        text-indent: 0px;
      }
      & > li {
        font-weight: 300;
        color: hsl(var(--foreground) / 0.8);
        position: relative;
        strong {
          font-weight: 500;
          color: hsl(var(--foreground));
        }
        & > div {
          text-indent: 0px;
        }
        &:before {
          content: '';
          position: absolute;
          height: 6px;
          width: 6px;
          left: -0.875rem;
          top: 0.75rem;
          transform: translate(0, -50%);
          border-radius: 1.5px;
          background-color: hsl(var(--primary));
        }
      }
    }
    ol {
      counter-reset: list-counter;
      list-style-type: decimal;
      padding: 0.75rem 0 0.75rem 2rem;
      & + p {
        text-indent: 0px;
      }
      & > li {
        counter-increment: list-counter;
        font-weight: 300;
        color: hsl(var(--foreground) / 0.8);
        position: relative;
        strong {
          font-weight: 500;
          color: hsl(var(--foreground));
        }
        & > div {
          text-indent: 0px;
          & > strong {
            font-weight: 600;
          }
          & > code {
            font-family: 'Fira Code', 'Courier New', Courier, monospace;
            color: hsl(var(--primary));
            background: hsl(var(--primary) / 0.2);
            padding: 0.125rem 0.25rem;
            margin: 0rem 0.125rem;
            border-radius: calc(var(--radius) - 2px);
          }
        }
      }
    }
  }
  ._post-content-text {
    p {
      text-indent: 50px;
      color: hsl(var(--foreground) / 0.8);
      padding-top: 0.5rem /* 8px */;
      padding-bottom: 0.5rem /* 8px */;
    }
    & strong {
      padding: 0 0.125rem;
      color: hsl(var(--primary));
      font-weight: 600;
    }
  }
  ._post-quote-rich {
    padding: 2rem 0 1rem 1.5rem;
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    font-weight: 300;
    font-style: italic;
    @media (min-width: 992px) {
      padding: 3rem 0 1.5rem 3rem;
      font-size: 1.875rem /* 30px */;
      line-height: 2.25rem /* 36px */;
      line-height: 2.5rem; /* 40px */
    }
    @media (min-width: 1200px) {
      & > div {
        width: 1024px;
      }
    }
  }
`

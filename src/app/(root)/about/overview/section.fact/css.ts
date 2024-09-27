import { css } from '@emotion/css'

export const CSS = css`
  & > div:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 4px;
    left: -25px;
    background-color: hsl(var(--primary));
  }
  & > div {
    position: relative;
    font-size: 16px;
    display: flex;
    align-items: flex-start;
    & > p {
      opacity: 0.6;
      line-height: 18px;
      font-size: inherit;
    }
    & > h6 {
      padding: 0 4px;
      font-weight: 600;
      line-height: 18px;
      font-size: inherit;
    }
    & > h5 {
      padding: 0 4px;
      font-weight: 600;
      font-size: 18px;
      line-height: 18px;
      color: hsl(var(--primary));
    }
  }
  & > div:nth-child(n):not(:last-child) {
    padding-bottom: 18px;
  }
  @media (max-width: 1339.98px) {
    & > div:before {
      top: 5px;
      left: -22px;
      width: 8px;
      height: 8px;
    }
  }
  @media (max-width: 1199.98px) {
    & > div:before {
      top: 5px;
      left: -22px;
      width: 8px;
      height: 8px;
    }
    & > div {
      font-size: 14px;
      & > h5 {
        font-size: 16px;
        line-height: 14px;
      }
    }
  }
  @media (max-width: 991.98px) {
    & > div:before {
      top: 6px;
      left: -15px;
      width: 5px;
      height: 5px;
    }
    & > div {
      font-size: 10px;
      & > h5 {
        font-size: 12px;
        line-height: 14px;
      }
    }
    & > div:nth-child(n):not(:last-child) {
      padding-bottom: 6px;
    }
  }
  @media (max-width: 767.98px) {
    & > div:before {
      top: 7px;
      left: -12px;
      width: 4px;
      height: 4px;
    }
    & > div {
      font-size: 8px;
      & > h5 {
        font-size: 10px;
        line-height: 16px;
      }
    }
    & > div:nth-child(n):not(:last-child) {
      padding-bottom: 3px;
    }
  }
  @media (max-width: 479.98px) {
    width: 120vw;
  }
`

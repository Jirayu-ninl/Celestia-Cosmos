import { css } from '@emotion/css'

export const CanvasMenuItem = css`
  display: flex;
  color: hsl(var(--foreground));
  opacity: 0.4;
  transition-duration: 1500ms;
  text-decoration: none;
  height: 60px;
  margin: 40px 0;
  & h1 {
    font-size: 77px;
    font-weight: 700;
    margin-left: 38px;
    // color: rgba(0, 0, 0, 0);
    color: rgba(255, 255, 250, 0);
    // -webkit-text-stroke: 1px #fff;
    -webkit-text-stroke: 2px hsl(var(--foreground));
    transition-duration: 500ms;
    @media (max-width: 1199.98px) {
      font-size: 48px;
    }
    @media (max-width: 478.98px) {
      font-size: 32px;
      margin-left: 12px;
      // -webkit-text-stroke: 0.5px #fff;
      -webkit-text-stroke: 0.5px hsl(var(--foreground));
      font-weight: 800;
    }
  }
  & h1:before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 10px;
    width: calc(100% - 20px);
    height: 2px;
    // background: #fff;
    background: hsl(var(--foreground));
    transform: scaleX(0);
    transform-origin: right;
    transition: 0.5s transform;
    z-index: 50;
  }
  & h6 {
    font-weight: 800;
    // color: #fff;
    color: hsl(var(--foreground));
    opacity: 0.5;
    @media (max-width: 478.98px) {
      font-size: 12px;
    }
  }
  &:hover {
    opacity: 1;
    transition-duration: 250ms;
    cursor: none;
    & h1 {
      // color: white;
      color: hsl(var(--primary));
      // -webkit-text-stroke: 0px #fff;
      -webkit-text-stroke: 0px hsl(var(--foreground));
      letter-spacing: 5px;
      transition-duration: 250ms;
      transform: translateX(10%);
    }
    & h1:before {
      transform: scaleX(1);
      transform-origin: left;
      transition: 0.5s transform;
    }
    & h6 {
      transition-duration: 250ms;
      opacity: 1;
      color: hsl(var(--primary));
    }
  }
`

export const bgText = css`
  position: absolute;
  pointer-events: none;
  height: 100%;
  width: 200%;
  transform: translateX(-25%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h1 {
    color: hsl(var(--foreground));
    font-size: 500px;
    font-weight: 800;
    line-height: 400px;
    opacity: 0.05;
  }
`

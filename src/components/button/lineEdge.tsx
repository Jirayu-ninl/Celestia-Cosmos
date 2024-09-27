import Link from 'next/link'
import { css } from '@emotion/css'
import clsx from 'clsx'

import { theme } from '@config'

const LineEdge = ({
  href,
  text,
  classParent,
  classChild,
  isPrimary = false,
}: {
  href: string
  text: string
  classParent?: string
  classChild?: string
  isPrimary?: boolean
}) => {
  const BtnCSS = css`
    // border: 1px solid #ffffff88;
    color: #fff;
    padding: 0;
    background: hsl(var(--foreground) / 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    & > span {
      color: ${isPrimary ? `hsl(var(--primary))` : `hsl(var(--foreground))`};
      // padding: 8px 16px;
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
    }
    &:before,
    &:after {
      position: absolute;
      content: '';
      right: 0;
      bottom: 0;
      background: ${isPrimary
        ? `hsl(var(--primary))`
        : `hsl(var(--foreground))`};
      transition: all 0.3s ease;
    }
    &:before {
      height: 30%;
      width: 2px;
    }
    &:after {
      width: 10%;
      height: 2px;
    }
    &:hover:before {
      height: 100%;
    }
    &:hover:after {
      width: 100%;
    }
    &:hover {
      background: transparent;
    }
    & > span:hover {
      color: ${isPrimary ? `hsl(var(--primary))` : `hsl(var(--foreground))`};
    }
    & > span:before,
    & > span:after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      background: ${isPrimary
        ? `hsl(var(--primary))`
        : `hsl(var(--foreground))`};
      transition: all 0.3s ease;
    }
    & > span:before {
      width: 2px;
      height: 30%;
    }
    & > span:after {
      height: 2px;
      width: 10%;
    }
    & > span:hover:before {
      height: 100%;
    }
    & > span:hover:after {
      width: 100%;
    }
  `
  return (
    <>
      <Link href={href} className={clsx(BtnCSS, classParent)}>
        <span
          className={clsx(
            classChild,
            'px-3 py-2 text-xs md:px-4 md:py-2 md:text-base',
          )}
        >
          {text}
        </span>
      </Link>
    </>
  )
}

export default LineEdge

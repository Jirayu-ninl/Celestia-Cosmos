'use client'

import { MarqueeBlockProps } from './marquee.common'
import { Fragment } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useAnimateObjectWhenScroll } from '@nexel/cosmos/animations/hooks'

export const ScrollingMarquee: React.FC<MarqueeBlockProps> = ({ marquee }) => {
  const marqueeText = [...marquee.word, ...marquee.word]
  const { ref, motionValue, reverseMotionValue } = useAnimateObjectWhenScroll({
    setScrollRange: (rect) => (rect ? [rect.top - 1000, rect.bottom] : [0, 0]),
    setValueRange: (rect) => (rect ? [0, -rect.width] : [0, 0]),
    options: {
      withReversedValue: true,
    },
  })

  return (
    <>
      <div
        className={clsx(
          '_project-marquee',
          marquee.rotate && '_project-marquee-rotate',
        )}
        style={{
          height: marquee.line === 1 ? '8rem' : '16rem',
        }}
        ref={ref}
      >
        <motion.div style={{ x: motionValue }}>
          {marqueeText.map((v, i) => (
            <Fragment key={i}>
              <p
                className={clsx(
                  !marquee.separator && 'pr-2',
                  !marquee.separator && i % 2 && 'opacity-20',
                )}
              >
                {v}
              </p>
              {marquee.separator && (
                <span className=''>{marquee.separator}</span>
              )}
            </Fragment>
          ))}
        </motion.div>
        {marquee.line === 2 && (
          <motion.div style={{ x: reverseMotionValue }}>
            {marqueeText.map((v, i) => (
              <Fragment key={i}>
                <p
                  className={clsx(
                    !marquee.separator && 'pr-2',
                    !marquee.separator && i % 2 && 'opacity-20',
                  )}
                >
                  {v}
                </p>
                {marquee.separator && (
                  <span className=''>{marquee.separator}</span>
                )}
              </Fragment>
            ))}
          </motion.div>
        )}
      </div>
    </>
  )
}

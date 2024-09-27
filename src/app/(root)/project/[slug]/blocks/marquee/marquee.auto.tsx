'use client'

import { MarqueeBlockProps } from './marquee.common'
import { Fragment } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export const AutoMarquee: React.FC<MarqueeBlockProps> = ({ marquee }) => {
  const marqueeText = [...marquee.word, ...marquee.word]
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
      >
        <motion.div
          animate={{ x: '-10%' }}
          transition={{
            ease: 'linear',
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
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
          <motion.div
            initial={{ x: '-10%' }}
            animate={{ x: 0 }}
            transition={{
              ease: 'linear',
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{ animationDirection: 'reverse' }}
          >
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

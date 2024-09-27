'use client'

import type { MotionValue } from 'framer-motion'
import { useRef } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import clsx from 'clsx'
import { dockConfig } from '../animations/config'

interface DockItemProps {
  mouseX: MotionValue<number>
  className?: string
  children?: React.ReactNode
  onClick?: () => void
  width?: number
  props?: React.PropsWithChildren
}

export const DockItem: React.FC<DockItemProps> = ({
  mouseX,
  className,
  children,
  onClick,
  width = 18,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(
    distanceCalc,
    [-dockConfig.distance, 0, dockConfig.distance],
    [width, dockConfig.magnification + width - 18, width],
  )

  const widthAnimate = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width: widthAnimate }}
      className={clsx('cursor-pointer', className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  )
}

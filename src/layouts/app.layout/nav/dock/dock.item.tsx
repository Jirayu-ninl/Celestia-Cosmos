'use client'

import type { MotionValue } from 'framer-motion'
import { useRef } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import clsx from 'clsx'

interface DockItemProps {
  mouseX: MotionValue<number>
  className?: string
  children?: React.ReactNode
  onClick?: () => void
  height?: number
  props?: React.PropsWithChildren
  active?: boolean
}

// export const dockConfig = {
//   magnification: 60,
//   distance: 140,
// }

export const dockConfig = {
  magnification: 1,
  distance: 80,
}

export const DockItem: React.FC<DockItemProps> = ({
  mouseX,
  className,
  children,
  onClick,
  height = 18,
  active,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 }
    return val - bounds.y - bounds.height / 2
  })

  // const heightSync = useTransform(
  //   distanceCalc,
  //   [-dockConfig.distance, 0, dockConfig.distance],
  //   [height, dockConfig.magnification + height - 18, height],
  // )

  // const heightAnimate = useSpring(heightSync, {
  //   mass: 0.1,
  //   stiffness: 150,
  //   damping: 12,
  // })

  const opacitySync = useTransform(
    distanceCalc,
    [-dockConfig.distance, 0, dockConfig.distance],
    [0.2, dockConfig.magnification + 0.2, 0.2],
  )

  const opacityAnimate = useSpring(opacitySync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      // style={{ height: heightAnimate }}
      style={{ height: height, opacity: active ? 1 : opacityAnimate }}
      className={clsx('cursor-pointer', className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  )
}

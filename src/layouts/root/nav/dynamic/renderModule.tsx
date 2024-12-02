import type { MotionValue } from 'framer-motion'
import { useMemo } from 'react'
import { DynamicNavModule, NAV_DYN_TYPE, CURSOR } from '@/store'
import {
  BackModule,
  ScrollProgressModule,
  ShareModule,
  External_linkModule,
} from './modules'
import { DockItem } from '@cosmos/ui/dock/dockItem/x.width'

interface renderModuleProps {
  module: DynamicNavModule
  _setCursor: (C: CURSOR | undefined) => void
  mouseX: MotionValue<number>
}
export const RenderModule: React.FC<renderModuleProps> = ({
  module,
  _setCursor,
  mouseX,
}) => {
  const Module = useMemo(
    () => ({
      [NAV_DYN_TYPE.PROGRESS]: ScrollProgressModule,
      [NAV_DYN_TYPE.BACK]: BackModule,
      [NAV_DYN_TYPE.SHARE]: ShareModule,
      [NAV_DYN_TYPE.EXTERNAL_LINK]: External_linkModule,
    }),
    [],
  )
  const ModuleComponent = Module[module.type]

  return (
    <>
      <DockItem
        mouseX={mouseX}
        width={46}
        onClick={() => {
          _setCursor(undefined)
        }}
      >
        <ModuleComponent dataState={module as never} />
      </DockItem>
    </>
  )
}

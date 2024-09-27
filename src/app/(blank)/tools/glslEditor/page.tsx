/* eslint-disable @typescript-eslint/no-var-requires */
'use client'

import { useLayoutEffect, useRef } from 'react'
import './libs/glslEditor.css'
import './patch.css'

function Page() {
  const CanvasRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const GlslEditor = require('./libs/glslEditor.min.js')
    const canvasSize = window
      ? window.innerWidth <= 768
        ? 250
        : window.innerWidth <= 1440
          ? 350
          : 500
      : 500
    const InitEditor = () => {
      new GlslEditor(CanvasRef.current, {
        canvas_size: canvasSize,
        canvas_draggable: true,
        theme: 'monokai',
        multipleBuffers: true,
        watchHash: true,
        fileDrops: true,
        menu: true,
      })
    }
    InitEditor()
    if (CanvasRef.current) {
      const $editor = CanvasRef.current.children[2]
      // $editor.style.paddingTop = 0
    }
    return () => window.removeEventListener('beforeunload', () => {})
  }, [])

  return (
    <div className='NSB h-dvh w-dvw p-5'>
      <div className='relative h-full w-full overflow-x-hidden overflow-y-scroll rounded-lg bg-[#26272a]'>
        <div ref={CanvasRef} />
      </div>
    </div>
  )
}

export default Page

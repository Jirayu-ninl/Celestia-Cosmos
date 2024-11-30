'use client'

import { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/shallow'
import throttle from 'lodash.throttle'
import { useUiState, CURSOR } from '@/store'
import { MainCursorCSS, BigCursorCSS } from './cursor.css'

export const CursorController = () => {
  const [_cursorType, _mousePosition, _setMousePosition] = useUiState(
    useShallow((st) => [st.cursor, st.mousePosition, st.setMousePosition]),
  )

  const cursor = useRef<HTMLDivElement | null>(null)
  const cursor2 = useRef<HTMLDivElement | null>(null)

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    if (cursor.current) {
      cursor.current.style.left = `${clientX}px`
      cursor.current.style.top = `${clientY}px`
    }
    if (cursor2.current) {
      cursor2.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0px)`
    }
  }

  const throttledSetMousePosition = useRef(
    throttle((clientX: number, clientY: number) => {
      _setMousePosition({ clientX, clientY })
    }, 22), // 45fps
  ).current

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      onMouseMove(event)
      throttledSetMousePosition(event.clientX, event.clientY)
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      throttledSetMousePosition.cancel()
    }
  }, [throttledSetMousePosition])

  return (
    <div>
      <div className={`${MainCursorCSS} ${_cursorType}`} ref={cursor} />
      <div
        ref={cursor2}
        className={`${BigCursorCSS} ${
          _cursorType ? (_cursorType === CURSOR.LENS ? 'lens' : 'active') : ''
        }`}
      />
    </div>
  )
}

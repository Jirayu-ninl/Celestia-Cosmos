'use client'

// import type { MousePosition } from '@/store'
import { useEffect } from 'react'
import { useShallow } from 'zustand/shallow'
import { useUiState, CURSOR } from '@/store'
import { MainCursorCSS, BigCursorCSS } from './cursor.css'

export const CursorController = () => {
  const [_cursorType, _mousePosition, _setMousePosition] = useUiState(
    useShallow((st) => [st.cursor, st.mousePosition, st.setMousePosition]),
  )

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    _setMousePosition({ clientX, clientY })
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      onMouseMove(event)
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div>
      <div
        className={`${MainCursorCSS} ${_cursorType}`}
        style={{
          left: `${_mousePosition.clientX}px`,
          top: `${_mousePosition.clientY}px`,
        }}
      />
      <div
        className={`${BigCursorCSS} ${
          _cursorType ? (_cursorType === CURSOR.LENS ? 'lens' : 'active') : ''
        }`}
        style={{
          transform: `translate3d(${_mousePosition.clientX}px, ${_mousePosition.clientY}px, 0px)`,
        }}
      />
    </div>
  )
}

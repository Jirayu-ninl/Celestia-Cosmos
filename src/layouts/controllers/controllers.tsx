'use client'

import { Initialize } from './initialize'
import { ThemeController } from './theme.controller'
import { CursorController } from './cursor.controller'
import { AudioController } from './audio.controller'
import { KeyboardController } from './keyboard.controller'

export const Controllers = () => {
  return (
    <>
      <Initialize />
      <ThemeController />
      <CursorController />
      <AudioController />
      <KeyboardController />
    </>
  )
}

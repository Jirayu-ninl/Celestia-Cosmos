'use client'
import { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/shallow'
import { useUiState } from '@/store'

const AudioUrl = '/layout/audio/WebSound.mp3'

export const AudioController = () => {
  const [_audio, _setAudio] = useUiState(
    useShallow((st) => [st.audio, st.setAudio]),
  )

  const $audio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if ($audio.current) {
      const ref = $audio.current
      _audio ? ref.play() : ref.pause()
    }
  }, [_audio])

  return (
    <>
      <audio ref={$audio} loop key='audioBG'>
        <source src={AudioUrl} type='audio/mpeg' />
      </audio>
    </>
  )
}

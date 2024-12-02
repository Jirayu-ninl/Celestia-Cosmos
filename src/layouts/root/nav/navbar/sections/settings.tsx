import type { MotionValue } from 'framer-motion'
import { useShallow } from 'zustand/shallow'
import { useUiState, CURSOR } from '@/store'
import {
  // Settings as SettingsIcon,
  SoundOn as SoundOnIcon,
  SoundOff as SoundOffIcon,
  MoonStar as MoonStarIcon,
  Sun as SunIcon,
} from '@cosmos/assets/icons'
import { DockItem } from '@cosmos/ui/dock/dockItem/x.width'

interface SettingsSectionProps {
  _setCursor: (cursor: CURSOR | undefined) => void
  // _onToggleNavAction: (action: NAV_ACTION) => void
  _onClearNavAction: () => void
  mouseX: MotionValue<number>
}

export const Settings: React.FC<SettingsSectionProps> = ({
  _setCursor,
  // _onToggleNavAction,
  _onClearNavAction,
  mouseX,
}) => {
  const [_dark, _onToggleDark, _audio, _onToggleAudio] = useUiState(
    useShallow((st) => [st.dark, st.onToggleDark, st.audio, st.onToggleAudio]),
  )

  return (
    <>
      <div className='flex h-full items-end fill-foreground px-4 pb-4 [&>div]:mx-2'>
        {/* <DockItem
          mouseX={mouseX}
          onClick={() => {
            _onToggleNavAction(NAV_ACTION.SETTINGS)
            _setCursor(undefined)
          }}
        >
          <SettingsIcon />
        </DockItem> */}
        <DockItem
          mouseX={mouseX}
          onClick={() => {
            _onToggleAudio()
            _onClearNavAction()
            _setCursor(undefined)
          }}
        >
          {_audio ? <SoundOnIcon /> : <SoundOffIcon />}
        </DockItem>
        <DockItem
          mouseX={mouseX}
          onClick={() => {
            _onToggleDark()
            _onClearNavAction()
            _setCursor(undefined)
          }}
        >
          {_dark ? <MoonStarIcon /> : <SunIcon />}
        </DockItem>
      </div>
    </>
  )
}

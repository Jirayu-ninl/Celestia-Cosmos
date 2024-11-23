import { ColorBlockProps } from './palette.common'
import { PROJECT } from '@/enums/content'
import { DefaultColorPalette } from './palette.default'
import { MinimalColorPalette } from './palette.minimal'
import { CardColorPalette } from './palette.card'

export const ColorBlock: React.FC<ColorBlockProps> = ({ colorPalette }) => {
  switch (colorPalette.colorPaletteType) {
    case PROJECT.COLOR_PALETTE.DEFAULT:
      return <DefaultColorPalette colorPalette={colorPalette} />
    case PROJECT.COLOR_PALETTE.MINIMAL:
      return <MinimalColorPalette colorPalette={colorPalette} />
    case PROJECT.COLOR_PALETTE.CARD:
      return <CardColorPalette colorPalette={colorPalette} />
    default:
      return null
  }
}

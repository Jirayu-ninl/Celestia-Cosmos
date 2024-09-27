import { NAV } from '@/store'

export const navAnimationConfig = (_nav: NAV) => ({
  initial:
    _nav === NAV.TOP || _nav === NAV.BOTTOM
      ? { y: 150, x: '-50%' }
      : _nav === NAV.LEFT || _nav === NAV.RIGHT
        ? { x: 150, opacity: 0 }
        : {},
  animate:
    _nav === NAV.TOP || _nav === NAV.BOTTOM
      ? { y: 0, x: '-50%' }
      : _nav === NAV.LEFT || _nav === NAV.RIGHT
        ? { x: 0, opacity: 1 }
        : {},
  exit:
    _nav === NAV.TOP || _nav === NAV.BOTTOM
      ? { y: 150, x: '-50%' }
      : _nav === NAV.LEFT || _nav === NAV.RIGHT
        ? { x: 150, opacity: 0 }
        : {},
})

export const dynNavAnimationConfig = (_nav: NAV) => ({
  initial:
    _nav === NAV.TOP || _nav === NAV.BOTTOM
      ? { y: 150, x: '-50%' }
      : _nav === NAV.LEFT || _nav === NAV.RIGHT
        ? { x: 150, opacity: 0 }
        : {},
  animate:
    _nav === NAV.TOP || _nav === NAV.BOTTOM
      ? { y: 0, x: '-50%' }
      : _nav === NAV.LEFT || _nav === NAV.RIGHT
        ? { x: 0, opacity: 1 }
        : {},
  exit:
    _nav === NAV.TOP || _nav === NAV.BOTTOM
      ? { y: 150, x: '-50%' }
      : _nav === NAV.LEFT || _nav === NAV.RIGHT
        ? { x: 150, opacity: 0 }
        : {},
})

export const iconAnimationConfig = (_nav: NAV) => ({
  animate:
    _nav === NAV.TOP || _nav === NAV.BOTTOM
      ? { width: 18 }
      : _nav === NAV.LEFT || _nav === NAV.RIGHT
        ? { height: 18 }
        : {},
  whileHover:
    _nav === NAV.TOP || _nav === NAV.BOTTOM
      ? { width: 28, scale: 1.4, y: -13 }
      : _nav === NAV.LEFT || _nav === NAV.RIGHT
        ? { height: 28, scale: 1.4 }
        : {},
})

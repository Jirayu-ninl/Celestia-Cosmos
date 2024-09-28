import { DynamicNavModule } from './UiState.DynNav'

export enum INTERFACE {
  EXPERIENCE = 'experience',
  SIMPLE = 'simple',
}

export enum NAV {
  DRAGGABLE = 'draggable',
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

export enum NAV_ACTION {
  NOTIFICATIONS = 'notifications',
  CART = 'cart',
  SETTINGS = 'settings',
  PORTAL = 'portal',
  USER = 'user',
  WALLET = 'wallet',
  MENU_CANVAS = 'menu_canvas',
  DYNAMIC_NAVBAR_MENU = 'dyn_nav_mobile',
}

export enum FOOTER {
  DEFAULT = 'default',
  BLUR_BG = 'blur_bg',
}

export enum MODAL {
  APP_INFO = 'appInfo',
  SEARCH = 'search',
  SETTINGS = 'settings',
  USER = 'user',
}

export enum CURSOR {
  LOGO = 'logo',
  POINTER = 'pointer',
  GO = 'go',
  EXPANSE = 'expanse',
  LENS = 'lens',
}

export interface MousePosition {
  clientX: number
  clientY: number
}

export interface UiState {
  dark: boolean
  setDark: (dark: boolean) => void
  onToggleDark: () => void
  interface: INTERFACE
  setInterface: (i: INTERFACE) => void
  cursor: CURSOR | undefined
  setCursor: (cursor: CURSOR | undefined) => void
  mousePosition: MousePosition
  setMousePosition: (mousePosition: MousePosition) => void
  nav: NAV | undefined
  setNav: (nav: NAV | undefined) => void
  navAction: NAV_ACTION | undefined
  onToggleNavAction: (action: NAV_ACTION) => void
  onClearNavAction: () => void
  footer: FOOTER | undefined
  setFooter: (footer: FOOTER | undefined) => void
  modal: MODAL | undefined
  onToggleModal: (modal: MODAL) => void
  onClearModal: () => void
  audio: boolean
  setAudio: (audio: boolean) => void
  onToggleAudio: () => void
  dynamicNav: DynamicNavModule[] | []
  setDynamicNav: (dynModules: DynamicNavModule[] | []) => void
  addDynamicNav: (dynModule: DynamicNavModule) => void
  onClearDynamicNav: () => void
}

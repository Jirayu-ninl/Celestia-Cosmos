export enum CONTENT_BLOCK {
  PARAGRAPH = 'paragraph',
  HEADING_ONE = 'heading-one',
  HEADING_TWO = 'heading-two',
  HEADING_THREE = 'heading-three',
  HEADING_FOUR = 'heading-four',
  HEADING_FIVE = 'heading-five',
  HEADING_SIX = 'heading-six',
  IMAGE = 'image',
  CLASS = 'class',
  BLOCK_QUOTE = 'block-quote',
}

export enum BLOCK_TYPE {
  CONTENT = 'CONTENT',
  IMAGE = 'IMAGE',
  QUOTE = 'QUOTE',
  CODE = 'CODE',
  SEPARATOR = 'SEPARATOR',
  BUTTON = 'BUTTON',
  COMFY_NODE = 'COMFY_NODE',
}

export enum HEADING_HIERARCHY {
  NONE = 'NONE',
  TWO = 'h2',
  THREE = 'h3',
  FOUR = 'h4',
  FIVE = 'h5',
  SIX = 'h6',
}

export enum IMAGE {
  DEFAULT = 'DEFAULT',
  FULL_WIDTH = 'FULL_WIDTH',
  GALLERY = 'GALLERY',
}

export enum QUOTE {
  BLOCK = 'BLOCK',
  RICH = 'RICH',
}

export enum CODE_LANGUAGE {
  HTML = 'html',
  CSS = 'css',
  TypeScript = 'typeScript',
  Rust = 'rust',
  Python = 'python',
  CPP = 'cpp',
  Json = 'json',
}

export enum SEPARATOR {
  DOT = 'DOT',
  LINE_SM = 'LINE_SM',
  LINE_XL = 'LINE_XL',
  JUST_PADDING = 'JUST_PADDING',
}

export enum ICON {
  FILE = 'FILE',
  GITHUB = 'GITHUB',
  IMAGE = 'IMAGE',
  DOWNLOAD = 'DOWNLOAD',
  EXTERNAL = 'EXTERNAL',
}

export enum BUTTON {
  DEFAULT = 'DEFAULT',
  SOLID = 'SOLID',
}

export enum BUTTON_ALIGN {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL',
}

export enum BUTTON_TARGET {
  DEFAULT = 'DEFAULT',
  NEW_TAB = 'NEW_TAB',
}

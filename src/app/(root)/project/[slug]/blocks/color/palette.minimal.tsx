import { ColorBlockProps } from './palette.common'

export const MinimalColorPalette: React.FC<ColorBlockProps> = ({
  colorPalette,
}) => {
  return (
    <div className='_project-color container'>
      {colorPalette.color.map((color, i: number) => (
        <div
          className='Anim AnimTranslate-10 AnimRotate-1 _project-color-minimal text-center'
          key={i}
          style={{ backgroundColor: color.hex }}
        >
          <div>
            <button
              style={{
                color: color.textColor || 'white',
                borderColor: color.textColor || 'white',
              }}
            >
              {color.hex}
            </button>
            <p style={{ color: color.textColor || 'white' }}>{color.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

import { ColorBlockProps } from './palette.common'

export const CardColorPalette: React.FC<ColorBlockProps> = ({
  colorPalette,
}) => {
  return (
    <div className='container my-[6rem] grid h-[500px] grid-cols-1 gap-8 md:h-[300px] md:grid-cols-3 xl:h-[400px]'>
      {colorPalette.color.map((color, i: number) => (
        <></>
      ))}
    </div>
  )
}

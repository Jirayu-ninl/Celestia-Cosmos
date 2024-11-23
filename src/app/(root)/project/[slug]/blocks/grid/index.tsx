import { GridBlockProps } from './grid.common'
import { PROJECT } from '@/enums/content'
import { MinimalGrid } from './grid.minimal'
import { CardGrid } from './grid.card'

export const GridBlock: React.FC<GridBlockProps> = ({ grid }) => {
  switch (grid.gridType) {
    case PROJECT.GRID.MINIMAL:
      return <MinimalGrid grid={grid} />
    case PROJECT.GRID.CARD:
      return <CardGrid grid={grid} />
    default:
      return null
  }
}

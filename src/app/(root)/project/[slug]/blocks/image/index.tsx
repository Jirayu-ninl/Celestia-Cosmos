import { ImageBlockProps } from './image.common'
import { ImageBlockLayout } from './image.layout'
import { ImageBlockSwitcher } from './image'

export const ImageBlock: React.FC<ImageBlockProps> = (props) => {
  return (
    <>
      <ImageBlockLayout title={props.image.title} description={props.image.description}>
        <ImageBlockSwitcher {...props} />
      </ImageBlockLayout>
    </>
  )
}

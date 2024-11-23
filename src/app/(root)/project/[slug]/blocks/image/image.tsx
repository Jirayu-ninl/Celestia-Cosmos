import { ImageBlockProps } from './image.common'
import { PROJECT } from '@/enums/content'
import { BannerImage } from './banner'
import { MobileMockupImages } from './mobileMockup'
import { Gallery4Images } from './gallery4'
import { OneImage } from './oneImage'

export const ImageBlockSwitcher: React.FC<ImageBlockProps> = (props) => {
  switch (props.image.imageType) {
    case PROJECT.IMAGE.BANNER_LOGO:
      return <BannerImage {...props} isLogo />
    case PROJECT.IMAGE.BANNER:
      return <BannerImage {...props} />
    case PROJECT.IMAGE.MOBILE_MOCKUP:
      return <MobileMockupImages {...props} />
    case PROJECT.IMAGE.GALLERY_4:
      return <Gallery4Images {...props} />
    case PROJECT.IMAGE.ONE_IMAGE:
      return <OneImage {...props} />
    default:
      return null
  }
}

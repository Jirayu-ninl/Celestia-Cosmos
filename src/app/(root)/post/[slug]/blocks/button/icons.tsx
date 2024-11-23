import { POST } from '@/enums/content'
import { Download, ExternalLink, FileImage, File } from '@components/icons'
import { FaGithub } from 'react-icons/fa6'

const ButtonIcons = ({ Icon }: { Icon: `${POST.ICON}` | null }) => {
  switch (Icon) {
    case POST.ICON.FILE:
      return File
    case POST.ICON.DOWNLOAD:
      return Download
    case POST.ICON.IMAGE:
      return FileImage
    case POST.ICON.GITHUB:
      return FaGithub
    case POST.ICON.EXTERNAL:
      return ExternalLink
    default:
      return () => null
  }
}

export { ButtonIcons }

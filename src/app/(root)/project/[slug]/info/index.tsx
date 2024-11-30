import type { ProjectInfo as ProjectInfoType } from 'types'
import { PROJECT } from '@/enums/content'
import { InlineGridInfo } from './info.inlineGrid'

export interface ProjectInfoProps {
  projectInfo: ProjectInfoType
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ projectInfo }) => {
  switch (projectInfo.infoType) {
    case PROJECT.INFO_TYPE.INLINE_GRID:
      return <InlineGridInfo projectInfo={projectInfo} />
    default:
      return null
  }
}

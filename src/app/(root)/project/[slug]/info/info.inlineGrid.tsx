import type { ProjectInfo } from '@types'
import { startCase } from 'lodash-es'
import Link from 'next/link'

type InfoItem = {
  title: string
  data: { description: string; url?: string | null }
}

const InlineGridInfo = ({ projectInfo }: { projectInfo: ProjectInfo }) => {
  const googleMapUrl = projectInfo.locationMap
    ? `${projectInfo.locationMap}`
    : null
  return (
    <div className='_project-info-inlineGrid container'>
      {projectInfo.client && (
        <InfoItem
          title='Client'
          data={{ description: projectInfo.client, url: projectInfo.clientUrl }}
        />
      )}
      {projectInfo.team && (
        <InfoItem
          title='Team'
          data={{ description: projectInfo.team, url: projectInfo.teamUrl }}
        />
      )}
      {projectInfo.type && (
        <InfoItem title='Type' data={{ description: projectInfo.type }} />
      )}
      {projectInfo.appTarget && (
        <InfoItem
          title='Client'
          data={{ description: startCase(projectInfo.appTarget) }}
        />
      )}
      {projectInfo.services && (
        <InfoItem
          title='Services'
          data={{ description: projectInfo.services }}
        />
      )}
      {projectInfo.industry && (
        <InfoItem
          title='Industry'
          data={{ description: projectInfo.industry }}
        />
      )}
      {projectInfo.location && (
        <InfoItem
          title='Location'
          data={{
            description: projectInfo.location,
            url: googleMapUrl,
          }}
        />
      )}
      {projectInfo.date && (
        <InfoItem title='Date' data={{ description: projectInfo.date }} />
      )}
      {projectInfo.releaseDate && (
        <InfoItem
          title='Release'
          data={{ description: projectInfo.releaseDate }}
        />
      )}
    </div>
  )
}

const InfoItem = ({ title, data: { description, url } }: InfoItem) => {
  return (
    <>
      <div className='Anim-1 AnimTranslate-4 backdrop-blur-md'>
        <h4>{title} :</h4>
        {url ? (
          <Link href={url}>
            <p>{description}</p>
          </Link>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </>
  )
}

export { InlineGridInfo }

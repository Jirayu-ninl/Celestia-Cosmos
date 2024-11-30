import type { RelatedProject } from 'types'
// import Image from 'next/image'
import { Image } from '@components'
import Link from 'next/link'

const RelatedProjects = ({
  projects,
  isPreview,
}: {
  projects: RelatedProject[]
  isPreview: boolean
}) => {
  return (
    <>
      <div className='_project-relatedProject container'>
        <h6>Related Projects</h6>
        {projects &&
          projects.map((project, i: number) => (
            <Link href={project.slug} key={i} passHref>
              <div className='_project-relatedProject-item Anim AnimTranslate-10 AnimSaturate-0 drop-shadow-[-12px_-12px_25px_rgba(0,0,0,0.2)] dark:drop-shadow-[-12px_-12px_25px_rgba(0,0,0,0.7)]'>
                <div>
                  <h5>{project.title}</h5>
                  <div>
                    {project.tag?.map((v: string, i: number) => (
                      <button
                        className='Anim AnimTranslate-4 backdrop-blur-md'
                        key={i}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
                <Image
                  alt={project.title}
                  src={project.coverImage.url}
                  // layout='fill'
                  fill
                  objectFit='cover'
                  unoptimized={isPreview}
                  // placeholder='blur'
                  // blurDataURL={
                  //   'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                  // }
                />
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}

export { RelatedProjects }

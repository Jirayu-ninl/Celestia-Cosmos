/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from 'graphql-request'
import { env } from '@env'
import { useFetchQL } from '@nexel/nextjs/libs/hooks/data'

type Project = {
  title: string
  slug: string
  date: string
}

export const getProjects = async () => {
  try {
    const requestQL = gql`
      {
        projects {
          title
          slug
          date
        }
      }
    `

    const { projects } = await useFetchQL(
      env.GRAPHQL_PROJECT_URL,
      { query: requestQL },
      { revalidate: 180 },
    )

    return projects.map((project: Project) => ({
      title: project.title,
      url: '/project/' + project.slug,
      lastModified: project.date ?? new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch (error) {
    return []
  }
}

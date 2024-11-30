/* eslint-disable react-hooks/rules-of-hooks */
import type { Locales } from 'types'
import { gql } from 'graphql-request'
import { useFetchQL } from '@nexel/nextjs/libs/hooks/data'
import { env } from '@env'
import { FETCH } from '@/enums/server'

const getProjects = async (
  { locales }: { locales: Locales } = { locales: 'en' },
) => {
  try {
    const requestQL = gql`
      {
        projects(locales: ${locales}) {
          title
          slug
          featured
          tagline
          tag
          coverImage {
            url
            width
            height
          }
        }
      }
    `

    const { projects } = await useFetchQL(
      env.GRAPHQL_PROJECT_URL,
      { query: requestQL },
      { revalidate: 180 },
    )

    return { status: FETCH.SUCCESS, projects }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

export { getProjects }

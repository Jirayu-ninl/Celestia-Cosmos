/* eslint-disable react-hooks/rules-of-hooks */
import type { Locales } from 'types'
import { gql } from 'graphql-request'
import { useFetchQL } from '@core/hooks/data'
import { env } from '@env'
import { FETCH } from '@/enums/server'

export const getPosts = async (
  { locales }: { locales: Locales } = { locales: 'en' },
) => {
  const endpointURL = env.GRAPHQL_POST_URL
  try {
    const requestQL = gql`
      {
        posts(locales: ${locales}) {
          slug
          title
          excerpt
          date
          featured
          tag
          coverImage {
            height
            url
            width
          }
        }
      }
    `

    const { posts } = await useFetchQL(
      endpointURL,
      { query: requestQL },
      { revalidate: 180 },
    )

    return { status: FETCH.SUCCESS, posts }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

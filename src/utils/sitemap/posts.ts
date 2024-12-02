/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from 'graphql-request'
import { env } from '@env'
import { useFetchQL } from '@core/hooks/data'

type Post = {
  title: string
  slug: string
  date: string
}

export const getPosts = async () => {
  try {
    const requestQL = gql`
      {
        posts {
          slug
          title
          date
        }
      }
    `

    const { posts } = await useFetchQL(
      env.GRAPHQL_POST_URL,
      { query: requestQL },
      { revalidate: 180 },
    )

    return posts.map((post: Post) => ({
      title: post.title,
      url: '/post/' + post.slug,
      lastModified: post.date ?? new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch (error) {
    return []
  }
}

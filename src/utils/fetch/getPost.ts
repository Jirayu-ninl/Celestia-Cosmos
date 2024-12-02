/* eslint-disable react-hooks/rules-of-hooks */
import type { GetPost } from 'types'
import { gql } from 'graphql-request'
import { useFetchQL } from '@core/hooks/data'
import { env } from '@env'
import { FETCH } from '@/enums/server'
// import { MockPost } from '@/mocks/post.mock'

export const getPost: GetPost = async ({ slug, locales = 'en' }, isPreview) => {
  const endpointURL = env.GRAPHQL_POST_URL
  try {
    const requestQL = gql`
      query Post($slug: String!) {
        post(where: { slug: $slug }, locales: ${locales}) {
          title
          tag
          slug
          featured
          excerpt
          date
          createdAt
          updatedAt
          coverImage {
            url
            width
            height
          }
          postCategory {
            title
            slug
            description
          }
          blocks {
            ... on Content {
              blockType
              title
              headingHierarchy
              text {
                html
              }
            }
            ... on Code {
              blockType
              title
              codeLanguage
              code {
                text
              }
            }
            ... on Image {
              blockType
              imageType
              title
              description
              headingHierarchy
              images {
                url
                width
                height
              }
            }
            ... on Quote {
              blockType
              quoteType
              content {
                html
              }
            }
            ... on Separator {
              blockType
              separatorType
            }
            ... on Button {
              id
              blockType
              buttonAlign
              buttonItems {
                ... on ButtonItem {
                  id
                  icon
                  description
                  target
                  title
                  url
                }
              }
              buttonType
              description
              title
            }
            ... on ComfyNode {
              id
              blockType
              description
              nodeData
              title
            }
          }
          relatedPosts {
            title
            slug
            tag
            excerpt
            featured
            coverImage {
              url
              width
              height
            }
          }
        }
      }
    `

    // const post = MockPost

    const HeaderOption = isPreview
      ? {
          'gcms-stage': 'DRAFT',
        }
      : {}

    const { post } = await useFetchQL(
      endpointURL,
      { query: requestQL, variables: { slug } },
      {
        revalidate: 180,
        headers: HeaderOption,
      },
    )

    return { status: FETCH.SUCCESS, post }
  } catch (error) {
    return { status: FETCH.ERROR, error }
  }
}

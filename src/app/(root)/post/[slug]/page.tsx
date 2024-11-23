/* eslint-disable react-hooks/rules-of-hooks */
import type { Metadata } from 'next'
import type { GetPostResult } from '@types'
import { FETCH } from '@/enums/server'
import { gql } from 'graphql-request'
// import clsx from 'clsx'
import * as FALLBACK from '@components/post/error'
import { useFetchQL } from '@nexel/nextjs/libs/hooks/data'
import { env } from '@env'
import { getPost } from '@/utils/fetch'
import { Layout } from './page.layout'
import { ContentLayout } from './content.layout'
import { Header } from './header'
import { Blocks } from './blocks'
import { RelatedPosts } from './relatedPost'
import { PostAuthor } from './author'

type PageProps = {
  params: { slug: string }
  searchParams: { preview: string }
}

const endpointURL = env.GRAPHQL_POST_URL

export const generateMetadata = async ({
  params: { slug },
  searchParams: { preview },
}: PageProps): Promise<Metadata> => {
  try {
    const requestQL = gql`
      query Post($slug: String!) {
        post(where: { slug: $slug }) {
          title
          excerpt
          coverImage {
            url
            width
            height
          }
        }
      }
    `
    const HeaderOption =
      preview === 'true'
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

    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        images: [post.coverImage],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [post.coverImage],
      },
    }
  } catch (error) {
    return {
      title: 'Post not found | IceJiVerse',
    }
  }
}

async function Page({
  params: { slug },
  // searchParams: { preview },
}: PageProps) {
  // TODO: Fix image optimization
  const preview: string = 'true'

  const data: GetPostResult = await getPost(
    { slug, locales: 'en' },
    preview === 'true',
  )

  if (data.status === FETCH.ERROR) {
    return (
      <FALLBACK.ConnectionError
        title='POST'
        backURL='/post'
        error={data.error}
      />
    )
  }

  if (!data.post) {
    return <FALLBACK.NotFound title='POST' backURL='/post' />
  }

  const post = data.post

  return (
    <>
      <Layout
        title={post.title}
        excerpt={post.excerpt}
        slug={post.slug}
        coverImage={post.coverImage}
      >
        <Header
          title={post.title}
          tag={post.tag}
          headerImage={post.coverImage}
          isPreview={preview === 'true'}
        />
        <ContentLayout>
          <Blocks blocks={post.blocks} isPreview={preview === 'true'} />
          <div className='container z-10 mt-48 w-screen px-4 xl:w-[1024px]'>
            <PostAuthor tag={post.tag} />
            <RelatedPosts
              posts={post.relatedPosts}
              tag={post.tag}
              isPreview={preview === 'true'}
            />
          </div>
        </ContentLayout>
      </Layout>
    </>
  )
}

export default Page

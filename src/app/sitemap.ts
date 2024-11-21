/* eslint-disable react-hooks/rules-of-hooks */
import { MetadataRoute } from 'next'
import { env } from '@env'
import { getPosts, getProjects, staticUrls } from '@/utils/sitemap'

const baseURL = env.NEXTAUTH_URL || 'https://theiceji.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const projects = await getProjects()

  return [
    ...staticUrls.map(({ title, url, ...staticUrl }: any) => ({
      url: baseURL + url,
      ...staticUrl,
    })),
    ...projects.map(({ title, url, ...project }: any) => ({
      url: baseURL + url,
      ...project,
    })),
    ...posts.map(({ title, url, ...post }: any) => ({
      url: baseURL + url,
      ...post,
    })),
  ]
}

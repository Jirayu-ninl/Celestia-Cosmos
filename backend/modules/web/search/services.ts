import type { Context } from '@backend/trpc/trpc.context'
import { getErrorMessage } from '@core/utils/server/error'
import { trpcResponse } from '@core/utils/server/trpc'
import { getPosts, getProjects, staticUrls } from '@/utils/sitemap'

export const getSearchIndex = async ({ ctx }: { ctx: Context }) => {
  try {
    const posts = await getPosts()
    const projects = await getProjects()

    if (!projects) {
      return trpcResponse.fail('Fetch posts failed')
    }

    if (!posts) {
      return trpcResponse.fail('Fetch projects failed')
    }

    const searchIndex = [
      ...staticUrls.map(({ title, url: path }) => ({ title, path })),
      ...projects.map(({ title, url: path }: any) => ({ title, path })),
      ...posts.map(({ title, url: path }: any) => ({ title, path })),
    ]
    return trpcResponse.success('Get search index complete', {
      data: searchIndex,
      // metadata: { session: null },
    })
  } catch (e) {
    const message = getErrorMessage(e)
    throw new Error(message)
  }
}

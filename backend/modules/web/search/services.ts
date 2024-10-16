import type { exampleInput } from './schema'
import type { Context } from '@backend/trpc/trpc.context'
import { getErrorMessage } from '@nexel/nextjs/utils/server/error'
import { trpcResponse } from '@nexel/nextjs/utils/server/trpc'
import { getPosts, getProjects, staticUrls } from '@/utils/sitemap'

export const getSearchIndex = async ({ ctx }: { ctx: Context }) => {
  try {
    const posts = await getPosts()
    const projects = await getProjects()

    const searchIndex = [
      ...staticUrls.map(({ title, url: path }) => ({ title, path })),
      ...projects.map(({ title, url: path }: any) => ({ title, path })),
      ...posts.map(({ title, url: path }: any) => ({ title, path })),
    ]
    return trpcResponse.success('Login complete', {
      data: searchIndex,
      // metadata: { session: null },
    })
  } catch (e) {
    const message = getErrorMessage(e)
    throw new Error(message)
  }
}

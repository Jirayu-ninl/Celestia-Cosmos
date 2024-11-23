import type { Locales } from './i18n'
import type { Post } from './post'
import { FETCH } from '@/enums/server'

export type GetPostResult =
  | {
      status: FETCH.SUCCESS
      post: Post
    }
  | {
      status: FETCH.ERROR
      error: any
    }

export type GetPost = (
  variable: { slug: string; locales?: Locales },
  isPreview?: boolean,
) => Promise<GetPostResult>

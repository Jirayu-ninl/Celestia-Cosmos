import type { Locales } from '../i18n'
import type { Project } from './project'
import { FETCH } from '@/enums/server'

export type GetProjectResult =
  | {
      status: FETCH.SUCCESS
      project: Project
    }
  | {
      status: FETCH.ERROR
      error: any
    }

export type GetProject = (
  variable: { slug: string; locales?: Locales },
  isPreview?: boolean,
) => Promise<GetProjectResult>

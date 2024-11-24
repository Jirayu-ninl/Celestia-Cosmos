import type { Block } from './blocks'
import { PROJECT } from '@/enums/content'

export type ProjectInfo = {
  infoType: `${PROJECT.INFO_TYPE}`
  client: string | null
  clientUrl: string | null
  team: string | null
  teamUrl: string | null
  type: string | null
  appTarget: `${PROJECT.INFO_APP_TARGET}` | null
  services: string | null
  industry: string | null
  location: string | null
  locationMap: { latitude: string; longitude: string } | null
  date: string | null
  releaseDate: string | null
}

export type RelatedProject = {
  title: string
  tagline: string
  tag: string[]
  slug: string
  coverImage: {
    url: string
    width: number
    height: number
    mimeType?: string
  }
}

export type Project = {
  title: string
  slug: string
  id: string
  tagline: string
  excerpt: string
  featured: boolean
  tag: string[]
  website: string | null
  updatedAt: string
  projectType: `${PROJECT.TYPE}`
  projectCategory: {
    title: string
    slug: string
  }[]
  coverImage: {
    url: string
    width: number
    height: number
    mimeType?: string
  }
  colorIdentity: {
    hex: string
    rgba?: {
      g: number
      b: number
      r: number
    }
  }
  header: {
    selectHeaderType: `${PROJECT.HEADER}`
    headerGallery: {
      url: string
      height: number
      width: number
      mimeType?: string
    }[]
  }
  projectInfo: ProjectInfo | null
  blocks: Block[]
  relatedProjects: RelatedProject[]
}

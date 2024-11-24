import type { Block } from './blocks'
// import { POST } from '@/enums/content'

export type relatedPost = {
  title: string
  slug: string
  tag: string[]
  excerpt: string
  featured: boolean
  coverImage: {
    url: string
    width: number
    height: number
  }
}

export type postCategory = {
  title: string
  slug: string
  description: string | null
}

export type Post = {
  title: string
  tag: string[]
  slug: string
  featured: boolean
  excerpt: string
  date: string
  createdAt: string
  updatedAt: string
  coverImage: {
    url: string
    width: number
    height: number
  }
  postCategory: postCategory[]
  blocks: Block[]
  relatedPosts: relatedPost[]
}

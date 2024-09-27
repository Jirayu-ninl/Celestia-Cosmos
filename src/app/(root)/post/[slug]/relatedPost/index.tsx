import type { relatedPost } from '@types'
import { Image } from '@components'
import Link from 'next/link'

const RelatedPosts = ({
  posts,
  tag,
  isPreview,
}: {
  posts: relatedPost[]
  tag: string[] | [] | null
  isPreview: boolean
}) => {
  return (
    <>
      <div className='_post-relatedPost'>
        <h6>Related Projects</h6>
        {posts &&
          posts.map((post, i: number) => (
            <Link href={post.slug} key={i} passHref>
              <div className='_post-relatedPost-item Anim AnimTranslate-10 AnimSaturate-0 drop-shadow-[-12px_-12px_25px_rgba(0,0,0,0.2)] dark:drop-shadow-[-12px_-12px_25px_rgba(0,0,0,0.7)]'>
                <div>
                  <h5>{post.title}</h5>
                  <div>
                    {post.tag?.map((v: string, i: number) => (
                      <button
                        className='Anim AnimTranslate-4 backdrop-blur-md'
                        key={i}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
                <Image
                  alt={post.title}
                  src={post.coverImage.url}
                  fill
                  objectFit='cover'
                  unoptimized={isPreview}
                />
              </div>
            </Link>
          ))}
      </div>
    </>
  )
}

export { RelatedPosts }

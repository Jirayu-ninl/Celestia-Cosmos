import { Image } from '@components'
// import Link from 'next/link'
import { AuthorData } from '@/contents/pages/post.author'

const PostAuthor = ({ tag }: { tag: string[] | [] | null }) => {
  return (
    <>
      <div className=''>
        {tag && (
          <div>
            {tag.map((v: string, i: number) => (
              <button className='_post-tag' key={i}>
                {v}
              </button>
            ))}
          </div>
        )}
        <div className='flex space-x-4 py-12'>
          <div>
            <Image
              // placeholder='blur'
              src={AuthorData.image.avatar}
              alt='IceJI Avatar image'
              height={128}
              width={128}
            />
          </div>
          <div>
            <h2 className='text-3xl font-bold'>{AuthorData.name}</h2>
            <p className='mt-2 opacity-80'>{AuthorData.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export { PostAuthor }

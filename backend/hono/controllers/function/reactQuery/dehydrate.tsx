// pages/posts.tsx
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useQuery,
} from '@tanstack/react-query'

// This could also be getServerSideProps
export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

function Posts() {
  // This useQuery could just as well happen in some deeper child to
  // the <PostsRoute>, data will be available immediately either way
  //
  // Note that we are using useQuery here instead of useSuspenseQuery.
  // Because this data has already been prefetched, there is no need to
  // ever suspend in the component itself. If we forget or remove the
  // prefetch, this will instead fetch the data on the client, while
  // using useSuspenseQuery would have had worse side effects.
  const { data } = useQuery({ queryKey: ['posts'], queryFn: getPosts })

  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix
  const { data: commentsData } = useQuery({
    queryKey: ['posts-comments'],
    queryFn: getComments,
  })

  // ...
}

export default function PostsRoute({ dehydratedState }) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <Posts />
    </HydrationBoundary>
  )
}

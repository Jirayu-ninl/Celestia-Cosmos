import Link from 'next/link'

const ConnectionError = ({
  title,
  backURL,
  error,
}: {
  title: string
  backURL: string
  error?: unknown
}) => {
  return (
    <>
      <div className='flex h-dvh w-full flex-col items-center justify-center'>
        <h3 className='text-2xl'>Error while connecting to</h3>
        <h2 className='text-5xl'>
          <span className='font-bold text-primary'>{title}</span> Database
        </h2>
        {typeof error === 'string' && (
          <p className='pt-2 font-light opacity-80'>({error})</p>
        )}
        <Link
          href={backURL}
          className='Anim AnimOpacity-60 mt-4 rounded-md border border-black/30 px-2 py-1 dark:border-white/30'
        >
          get back
        </Link>
      </div>
    </>
  )
}

export { ConnectionError }

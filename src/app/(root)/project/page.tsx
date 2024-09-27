import Client from './page.client'
import * as FALLBACK from '@components/post/error'
import { FETCH } from '@/enums'
import { getProjects } from '@/utils'

export const metadata = {
  title: 'Projects',
}

async function Page() {
  const data = await getProjects({ locales: 'en' })

  if (data.status === FETCH.ERROR) {
    return (
      <FALLBACK.ConnectionError
        title='PROJECT'
        backURL='/project'
        error={data.error}
      />
    )
  }

  if (!data.projects) {
    return <FALLBACK.NotFound title='PROJECT' backURL='/project' />
  }

  return (
    <>
      <Client projects={data.projects} />
    </>
  )
}

export default Page

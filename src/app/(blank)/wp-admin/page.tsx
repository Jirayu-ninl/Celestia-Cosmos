'use client'

import { useUiState, CURSOR } from '@/store'
import Link from 'next/link'

const Icons = [
  {
    title: 'Next.js',
    icon: 'https://skillicons.dev/icons?i=nextjs',
    href: 'https://nextjs.org/',
  },
  {
    title: 'TypeScript',
    icon: 'https://skillicons.dev/icons?i=typescript',
    href: 'https://www.typescriptlang.org/',
  },
  {
    title: 'tRPC',
    icon: 'https://trpc.io/img/logo.svg',
    href: 'https://trpc.io/',
  },
  {
    title: 'MongoDB',
    icon: 'https://skillicons.dev/icons?i=mongodb',
    href: 'https://www.mongodb.com/',
  },
  {
    title: 'Prisma',
    icon: 'https://skillicons.dev/icons?i=prisma',
    href: 'https://www.prisma.io/',
  },
  {
    title: 'GraphQL',
    icon: 'https://skillicons.dev/icons?i=graphql',
    href: 'https://graphql.org/',
  },
  {
    title: 'Auth.js',
    icon: 'https://next-auth.js.org/img/logo/logo-sm.png',
    href: 'https://authjs.dev/',
  },
  {
    title: 'Tailwind',
    icon: 'https://skillicons.dev/icons?i=tailwind',
    href: 'https://tailwindcss.com/',
  },

  {
    title: 'AWS S3',
    icon: 'https://skillicons.dev/icons?i=aws',
    href: 'https://aws.amazon.com/s3/',
  },
]

const Page = () => {
  const _setCursor = useUiState((st) => st.setCursor)
  return (
    <>
      <div className='flex h-dvh w-dvw flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold'>What are you looking for?</h2>
        <p>
          <span className='opacity-60'>I'm not using WordPress, using </span>
          <Link
            href='https://aurora.nexellab.com'
            className='font-bold text-primary'
          >
            Aurora Framework
          </Link>
        </p>
        <div
          className='mt-6 space-x-2 [&_button:hover]:opacity-100 [&_button:hover]:saturate-100 [&_button:hover]:duration-200 [&_button]:opacity-60 [&_button]:saturate-0 [&_button]:duration-500'
          onMouseEnter={() => _setCursor(CURSOR.EXPANSE)}
          onMouseMove={() => _setCursor(CURSOR.EXPANSE)}
          onMouseLeave={() => _setCursor(undefined)}
        >
          {Icons.map((icon) => (
            <Icon {...icon} key={icon.title} />
          ))}
        </div>
      </div>
    </>
  )
}

const Icon = ({ title, icon, href }: Record<string, string>) => {
  return (
    <>
      <Link href={href}>
        <button type='button'>
          <img src={icon} alt={title} className='h-6 el:h-8' />
        </button>
      </Link>
    </>
  )
}

export default Page

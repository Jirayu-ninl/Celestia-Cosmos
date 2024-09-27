import Link from 'next/link'
import { NavLayout } from './nav.layout'
import { pageList } from './list'

export const NavPage = () => {
  return (
    <>
      <NavLayout>
        {pageList.map((v, i) => (
          <li key={i} className='Anim'>
            <Link
              href={v.href}
              className='dark:hover:text-primary-0 hover:text-quaternary-2'
            >
              {v.title}
            </Link>
          </li>
        ))}
      </NavLayout>
    </>
  )
}

import Link from 'next/link'
import { NavLayout } from './nav.layout'
import { appList } from './list'

export const NavApp = () => {
  return (
    <>
      <NavLayout>
        <div className='hidden pb-2 pt-4 hover:transition-none xl:block'>
          <div className='bg-quaternary-2 dark:bg-primary-0 h-px w-8' />
        </div>
        {appList.map((v, i) => (
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

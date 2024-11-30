import Link from 'next/link'

const UserMenu = () => {
  return (
    <>
      <ul className='&>li:hover]:duration-100 py-2 text-lg [&>li:hover]:opacity-100 [&>li]:opacity-60 [&>li]:duration-300'>
        <li>
          <Link href='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link href='/dashboard/activity?section=notifications'>Notifications</Link>
        </li>
        <li>
          <Link href='/user/settings'>Settings</Link>
        </li>
      </ul>
    </>
  )
}

export { UserMenu }

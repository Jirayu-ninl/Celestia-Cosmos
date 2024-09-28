import Link from 'next/link'

const UserMenu = () => {
  return (
    <>
      <ul className='&>li:hover]:duration-100 py-2 text-lg [&>li:hover]:opacity-100 [&>li]:opacity-60 [&>li]:duration-300'>
        <li>
          <Link href='/app/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link href='/app/notifications'>Notifications</Link>
        </li>
        <li>
          <Link href='/app/settings'>Settings</Link>
        </li>
      </ul>
    </>
  )
}

export { UserMenu }

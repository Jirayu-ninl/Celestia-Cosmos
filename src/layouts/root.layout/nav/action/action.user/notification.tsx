import type { Notification } from '@types'
import Link from 'next/link'

export const UserNotification = () => {
  const notifications: Notification[] = [
    {
      id: '001',
      createdAt: new Date(),
      isRead: false,
      title: 'Celestia Network 1.0',
      content:
        'We are thrilled to announce the official launch of Celestia Network 1.0, your gateway to a decentralized and scalable Web3 experience! As a valued user, you can now explore enhanced features, seamless interactions, and the power of true decentralization. Stay tuned for more updates as we continue to innovate and evolve the network. Join us as we build the next generation of the internet!',
      link: 'https://constella.theiceji.com/changelog/celestia',
      userId: 'theiceji',
    },
  ]

  return (
    <>
      <div className='ml-3 w-64 border-l border-foreground/10 pl-3'>
        {notifications.length > 0 &&
          notifications.map((item) => (
            <>
              <Link href={item.link} key={item.id}>
                <div className='Anim w-full overflow-hidden rounded-md bg-foreground/10 p-2 hover:bg-foreground/20'>
                  <h6 className='font-bold'>{item.title}</h6>
                  <p className='text-xs opacity-40'>
                    {item.createdAt.toDateString()}
                  </p>
                  <p className='truncate text-sm'>{item.content}</p>
                </div>
              </Link>
            </>
          ))}
      </div>
    </>
  )
}

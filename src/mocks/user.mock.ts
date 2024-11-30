import type { Session } from 'types'

export const UserMockData: Session = {
  user: {
    id: 'theiceji',
    username: 'theiceji',
    name: 'TheIceJi',
    role: 'SUPER_ADMIN',
    plan: 'ELITE',
    email: 'admin@theiceji.com',
    image: '/page/about/Profile_Avatar@2x.png',
    balance: 169.98,
    metadata: {},
  },
  expires: new Date().toISOString(),
}

import {
  Dashboard,
  Activity,
  Graph,
  Wallet,
  Work,
  Calendar,
  Chat,
  Folder,
  Bag,
} from '@cosmos/assets/icons'

export enum APP_ROUTES {
  DASHBOARD = 'dashboard',
  ACTIVITY = 'activity',
  ANALYTICS = 'analytics',
  WALLET = 'wallet',
  PROJECTS = 'projects',
  CALENDAR = 'calendar',
  CHAT = 'chat',
  SPACE = 'space',
  SHOP = 'shop',
}

export const appRoutes = [
  {
    key: APP_ROUTES.DASHBOARD,
    Icon: Dashboard,
    path: 'overview',
  },
  {
    key: APP_ROUTES.ACTIVITY,
    Icon: Activity,
    path: 'activity',
  },
  {
    key: APP_ROUTES.ANALYTICS,
    Icon: Graph,
    path: 'analytics',
  },
  {
    key: APP_ROUTES.WALLET,
    Icon: Wallet,
    path: 'wallet',
  },
  {
    key: APP_ROUTES.PROJECTS,
    Icon: Work,
    path: 'projects',
  },
  {
    key: APP_ROUTES.CALENDAR,
    Icon: Calendar,
    path: 'calendar',
  },
  {
    key: APP_ROUTES.CHAT,
    Icon: Chat,
    path: 'chat',
  },
  {
    key: APP_ROUTES.SPACE,
    Icon: Folder,
    path: 'space',
  },
  {
    key: APP_ROUTES.SHOP,
    Icon: Bag,
    path: 'shop',
  },
]

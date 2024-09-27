import type { Notification, Cart } from '@types'

type User = {
  name: string
  email: string
  image: string
}

export interface UserState {
  user: User | undefined
  setUser: (user: User | undefined) => void
  notifications: Notification[] | []
  setNotifications: (items: Notification[] | []) => void
  cart: Cart[] | []
  setCart: (carts: Cart[] | []) => void
  onAddCart: (carts: Cart[] | []) => void
  onRemoveCart: (cartId: string) => void
}

import type { Notification, Cart } from '@types'
import { UserPlan, UserRole, User as PrismaUser } from '@prisma/client'

export type User =
  | {
      name: string
      email?: string | null
      image?: string | null
      id: string
      username: string
      role: UserRole
      plan: UserPlan
      balance: number
      metadata: Record<string, any>
    }
  | PrismaUser

export interface UserState {
  user: User | undefined
  onSetUser: (user: User | undefined) => void
  onClearUser: () => void
  notifications: Notification[] | []
  setNotifications: (items: Notification[] | []) => void
  cart: Cart[] | []
  setCart: (carts: Cart[] | []) => void
  onAddCart: (carts: Cart[] | []) => void
  onRemoveCart: (cartId: string) => void
}

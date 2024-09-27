import { UserState } from './UserState'
import { create } from 'zustand'

export const useUserState = create<UserState>((set, get) => ({
  user: undefined,
  setUser: (user) => set({ user: user }),
  notifications: [],
  setNotifications: (n) => set({ notifications: n }),
  cart: [],
  setCart: (cart) => set({ cart: cart }),
  onAddCart: (carts) => set({ cart: [...get().cart, ...carts] }),
  onRemoveCart: (cartId) => {
    const { cart } = get()
    const newCart = cart.filter((c) => c.id !== cartId)
    set({ cart: newCart })
  },
}))

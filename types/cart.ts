export type Cart = {
  id: string
  itemId: string
  createdAt: Date
  updatedAt: Date
  name: string
  link: string
  quantity: number
  userId: string
  image: string
  price: number
  user?: never
}

export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  rating: number
  category: string
  image: string
  hasPrime: boolean
  quantity?: number
}

export interface Cart {
  [key: string]: number
}

export interface HomeProps {
  cart: Cart
  loading: boolean
  movies: [any]
  setCart: (newVal: any) => void
}

export interface CartProps {
  cart: Cart
  movies: [any]
  setCart: any
  navigateTo: (route?: string) => void
}

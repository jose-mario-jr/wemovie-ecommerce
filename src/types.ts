export interface MovieType {
  id: number
  title: string
  price: number
  image: string
}

export interface CartType {
  [key: string]: number
}

export interface HeaderProps {
  cart: CartType
  route: string
  navigateTo: (route?: string) => void
}
export interface HomeProps {
  cart: CartType
  loading: boolean
  movies: MovieType[]
  setCart: (newVal: any) => void
}

export interface MovieCardProps {
  movie: MovieType
  cartCount: number
  setCart: (newVal: any) => void
}
export interface CartProps {
  cart: CartType
  movies: MovieType[]
  setCart: (newVal: any) => void
  navigateTo: (route?: string) => void
}

export interface CartItemProps {
  movie: MovieType
  cartCount: number
  setCart: (newVal: any) => void
}

export interface SuccessProps {
  navigateTo: (route?: string) => void
}

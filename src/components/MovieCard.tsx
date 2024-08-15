import AddCart from '../assets/AddCart.svg'
import { CartType, MovieCardProps } from '../types'
import Button from './Button'

const MovieCard = ({ movie, cartCount, setCart }: MovieCardProps) => {
  const { id, title, price, image } = movie

  const onClickAddToCart = () => {
    setCart((prev: CartType) => {
      const newCart = { ...prev }
      newCart[id] = newCart[id] ? newCart[id] + 1 : 1
      return newCart
    })
  }

  return (
    <div className="movie-card">
      <div>
        <img className="cover" src={image} alt={title} />
        <p>{title}</p>
        <span>R$ {price}</span>
      </div>
      <Button
        $success={!!cartCount}
        onClick={onClickAddToCart}
      >
        <div>
          <img src={AddCart} alt="Add to cart" />
          <span>{cartCount || 0}</span>
        </div>
        <p>ADICIONAR AO CARRINHO</p>
      </Button>
    </div>
  )
}

export default MovieCard

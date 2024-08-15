import AddCart from '../assets/AddCart.svg'
import { CartType, MovieCardProps } from '../types'
import Button from './Button'
import MovieCardDivs from './MovieCardDivs'
import MovieCardItem from './MovieCardItem'
import TextExtraSmall from './TextExtraSmall'
import TextMid from './TextMid'

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
    <MovieCardItem>
      <MovieCardDivs>
        <img src={image} alt={title} width={147} height={188} />
        <TextExtraSmall>{title}</TextExtraSmall>
        <TextMid>R$ {price.toFixed(2)}</TextMid>
      </MovieCardDivs>
      <Button $success={!!cartCount} onClick={onClickAddToCart}>
        <div>
          <img src={AddCart} alt="Add to cart" />
          <span>{cartCount || 0}</span>
        </div>
        <p>ADICIONAR AO CARRINHO</p>
      </Button>
    </MovieCardItem>
  )
}

export default MovieCard

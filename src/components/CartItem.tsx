import Trash from '../assets/Trash.svg'
import Minus from '../assets/Minus.svg'
import Plus from '../assets/Plus.svg'
import { CartItemProps, CartType } from '../types'
import CartTableHeader from './CartTable/CartTableHeader'
import CoverContainer from './CartTable/CoverContainer'
import TextSmall from './TextSmall'
import TextMid from './TextMid'
import CoverPrice from './CartTable/CoverPrice'
import CountForm from './CartTable/CountForm'
import QtInput from './CartTable/QtInput'
import PointerImg from './CartTable/PointerImg'

const CartItem = ({ movie, cartCount, setCart }: CartItemProps) => {
  const addToCart = () => {
    setCart((prev: CartType) => {
      const newCart = { ...prev }
      newCart[movie.id] = newCart[movie.id] ? newCart[movie.id] + 1 : 1
      return newCart
    })
  }

  const removeFromCart = (all = false) => {
    setCart((prev: CartType) => {
      const newCart = { ...prev }
      newCart[movie.id] = newCart[movie.id] - 1

      if (all || newCart[movie.id] <= 0) {
        delete newCart[movie.id]
      }
      return newCart
    })
  }

  return (
    <>
      <div className="cart-item">
        <img className="cover" src={movie.image} alt={movie.title} />
        <div className="right-container">
          <div className="top">
            <p className="title">{movie.title}</p>

            <span className="price">R$ {movie.price.toFixed(2)}</span>
            <img
              src={Trash}
              alt="Delete"
              onClick={() => removeFromCart(true)}
            />
          </div>
          <div className="bottom">
            <div className="count-form">
              <img src={Minus} alt="Delete" onClick={() => removeFromCart()} />
              <input type="number" value={cartCount} readOnly />
              <img src={Plus} alt="Add to cart" onClick={addToCart} />
            </div>
            <div className="subtotal">
              <p>subtotal</p>
              <span>R$ {(movie.price * cartCount).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <CartTableHeader>
        <CoverContainer>
          <img src={movie.image} alt={movie.title} width={147} height={188} />
          <CoverPrice>
            <TextSmall>{movie.title}</TextSmall>
            <TextMid>R$ {movie.price.toFixed(2)}</TextMid>
          </CoverPrice>
        </CoverContainer>
        <CountForm>
          <PointerImg
            src={Minus}
            alt="Delete"
            onClick={() => removeFromCart()}
          />
          <QtInput type="number" value={cartCount} readOnly />
          <PointerImg src={Plus} alt="Add to cart" onClick={addToCart} />
        </CountForm>
        <TextMid $align={'left'}>R$ {(movie.price * cartCount).toFixed(2)}</TextMid>

        <PointerImg
          src={Trash}
          alt="Delete"
          onClick={() => removeFromCart(true)}
          style={{ justifySelf: 'right' }}
        />
      </CartTableHeader>
    </>
  )
}

export default CartItem

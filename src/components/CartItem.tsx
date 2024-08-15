import Trash from '../assets/Trash.svg'
import Minus from '../assets/Minus.svg'
import Plus from '../assets/Plus.svg'
import { CartItemProps, CartType } from '../types'

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
      console.log([newCart, all, movie.id])
      if (all || newCart[movie.id] <= 0) {
        delete newCart[movie.id]
      }
      return newCart
    })
  }

  return (
    <div className="cart-item">
      <img className="cover" src={movie.image} alt={movie.title} />
      <div className="right-container">
        <div className="top">
          <p className="title">{movie.title}</p>

          <span className="price">R$ {movie.price}</span>
          <img src={Trash} alt="Delete" onClick={() => removeFromCart(true)} />
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
  )
}

export default CartItem

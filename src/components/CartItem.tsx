import React from 'react'
import Trash from '../assets/Trash.svg'
import Minus from '../assets/Minus.svg'
import Plus from '../assets/Plus.svg'

const CartItem = props => {
  const { id, title, price, image } = props.movie
  const { cartCount, setCart } = props

  const addToCart = () => {
    setCart(prev => {
      const newCart = { ...prev }
      newCart[id] = newCart[id] ? newCart[id] + 1 : 1
      return newCart
    })
  }

  const removeFromCart = (all = false) => {
    setCart(prev => {
      const newCart = { ...prev }
      newCart[id] = newCart[id] - 1
      console.log([newCart, all, id])
      if (all || newCart[id] <= 0) {
        delete newCart[id]
      }
      return newCart
    })
  }

  return (
    <div className="cart-item">
      <img className="cover" src={image} alt={title} />
      <div className="right-container">
        <div className="top">
          <p className="title">{title}</p>

          <span className="price">R$ {price}</span>
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
            <span>R$ {(price * cartCount).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem

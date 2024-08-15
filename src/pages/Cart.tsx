import CartItem from '../components/CartItem'
import EmptyCart from './EmptyCart'
import { CartProps } from '../types'

const Cart = ({ cart, movies, setCart, navigateTo }: CartProps) => {
  const cartMovies = Object.keys(cart)
    .map(id => movies.find(e => e.id === parseInt(id)))
    .filter(e => !!e)

  const totalValue = cartMovies.reduce((acc, movie) => {
    return acc + movie.price * cart[movie.id]
  }, 0)

  const finishOrder = () => {
    setCart({})
    navigateTo('success')
  }

  return cartMovies.length > 0 ? (
    <div className="cart">
      <div className="cart-list">
        {cartMovies.map(movie => (
          <CartItem
            key={movie.id}
            movie={movie}
            cartCount={cart[movie.id]}
            setCart={setCart}
          />
        ))}
      </div>
      <div className="cart-divider"></div>
      <div className="cart-total">
        <span>TOTAL</span>
        <span className="price">R$ {totalValue.toFixed(2)}</span>
      </div>
      <button className="empty finish-order" onClick={finishOrder}>
        <p>Finalizar pedido</p>
      </button>
    </div>
  ) : (
    <EmptyCart navigateTo={navigateTo} />
  )
}

export default Cart

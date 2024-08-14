import CartItem from '../components/CartItem'

import EmptyCart from './EmptyCart'

const Cart = props => {
  const { cart, movies, setCart } = props

  const cartMovies = Object.keys(cart).map(id => movies.find(e => e.id == id))

  const totalValue = cartMovies.reduce((acc, movie) => {
    return acc + movie.price * cart[movie.id]
  }, 0)

  const finishOrder = () => {
    // alert('Pedido finalizado com sucesso!')
    setCart({})
    props.navigateTo('success')
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
    <EmptyCart voltar={props.navigateTo} />
  )
}

export default Cart

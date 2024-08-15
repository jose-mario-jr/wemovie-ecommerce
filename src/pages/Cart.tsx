import CartItem from '../components/CartItem'
import EmptyCart from './EmptyCart'
import { CartProps } from '../types'
import Button from '../components/Button'
import CartTable from '../components/CartTable'
import CartTableHeader from '../components/CartTable/CartTableHeader'
import CartTableFooter from '../components/CartTable/CartTableFooter'
import TextGrey from '../components/TextGrey'
import TextBig from '../components/TextBig'
import TotalPrice from '../components/CartTable/TotalPrice'

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
    <>
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
        <Button className="finish-order" onClick={finishOrder}>
          FINALIZAR PEDIDO
        </Button>
      </div>

      <CartTable>
        <CartTableHeader>
          <TextGrey>PRODUTO</TextGrey>
          <TextGrey>QTD</TextGrey>
          <TextGrey>SUBTOTAL</TextGrey>
          <TextGrey></TextGrey>
        </CartTableHeader>
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

        <CartTableFooter>
          <Button className="finish-order" onClick={finishOrder} $maxW>
            FINALIZAR PEDIDO
          </Button>
          <TotalPrice>
            <TextGrey>TOTAL</TextGrey>
            <TextBig className="price">R$ {totalValue.toFixed(2)}</TextBig>
          </TotalPrice>
        </CartTableFooter>
      </CartTable>
    </>
  ) : (
    <EmptyCart navigateTo={navigateTo} />
  )
}

export default Cart

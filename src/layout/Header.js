import Cart from '../assets/Cart.svg'

const Header = props => {
  const cart = props.cart
  const countItems =
    props.cart && Object.values(cart).reduce((acc, curr) => acc + curr, 0)
  return (
    <header className="App-header">
      <div className="title">WeMovies</div>
      <div className="cart-container">
        <div className="card-label">
          <p>Meu Carrinho</p>
          <span>{countItems || 0} itens</span>
        </div>
        <img src={Cart} className="Cart" alt="Cart" />
      </div>
    </header>
  )
}

export default Header

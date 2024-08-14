import Cart from '../assets/Cart.svg'

const Header = () => (
  <header className="App-header">
    <div className="title">WeMovies</div>
    <div className="cart-container">
      <div className="card-label">
        <p>Meu Carrinho</p>
        <span>0 itens</span>
      </div>
      <img src={Cart} className="Cart" alt="Cart" />
    </div>
  </header>
)

export default Header

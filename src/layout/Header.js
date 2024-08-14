import Cart from '../assets/Cart.svg'

const Header = () => (
  <header className="App-header">
    <div className="title">WeMovies</div>
    <div className="cart-container">
      <span>0 itens</span>
      <img src={Cart} className="Cart" alt="Cart" />
    </div>
  </header>
)

export default Header

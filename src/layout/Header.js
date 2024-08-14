import CartIcon from '../assets/Cart.svg'

const Header = props => {
  const countItems =
    props.cart && Object.values(props.cart).reduce((acc, curr) => acc + curr, 0)
  return (
    <header className="App-header">
      <div className="title" onClick={props.goHome}>
        WeMovies
      </div>
      <div className="cart-container" onClick={props.gotoCart}>
        <div className="card-label">
          <p>Meu Carrinho</p>
          <span>{countItems || 0} itens</span>
        </div>
        <img src={CartIcon} className="Cart" alt="Cart" />
      </div>
    </header>
  )
}

export default Header

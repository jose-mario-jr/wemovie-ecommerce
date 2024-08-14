import React from 'react'
import CartIcon from '../assets/Cart.svg'

const Header = props => {
  const countItems =
    props.cart && Object.values(props.cart).reduce((acc, curr) => acc + curr, 0)

  return (
    <header className="App-header">
      <div className="title" onClick={() => props.navigateTo()}>
        WeMovies
      </div>
      <div className="cart-container" onClick={() => props.navigateTo('cart')}>
        <div className="card-label">
          {props.route !== 'cart' && <p>Meu Carrinho</p>}
          <span>{countItems || 0} itens</span>
        </div>
        <img src={CartIcon} className="Cart" alt="Cart" />
      </div>
    </header>
  )
}

export default Header

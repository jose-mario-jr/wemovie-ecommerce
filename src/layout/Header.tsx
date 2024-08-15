import React from 'react'
import CartIcon from '../assets/Cart.svg'
import { HeaderProps } from '../types'

const Header = ({ cart, navigateTo, route }: HeaderProps) => {
  const countItems =
    cart &&
    Object.values(cart).reduce((acc: number, curr: number) => acc + curr, 0)

  return (
    <header className="App-header">
      <div className="title" onClick={() => navigateTo()}>
        WeMovies
      </div>
      <div className="cart-container" onClick={() => navigateTo('cart')}>
        <div className="card-label">
          {route !== 'cart' && <p>Meu Carrinho</p>}
          <span>{countItems || 0} itens</span>
        </div>
        <img src={CartIcon} className="Cart" alt="Cart" />
      </div>
    </header>
  )
}

export default Header

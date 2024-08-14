import React from 'react'
import ReloadPage from '../assets/Reload-page.svg'

const EmptyCart = props => {
  return (
    <div className="empty-page">
      <p>Parece que não há nada por aqui</p>
      <img src={ReloadPage} alt="Reload Page" />
      <button className="empty" onClick={() => props.voltar()}>
        Voltar
      </button>
    </div>
  )
}

export default EmptyCart

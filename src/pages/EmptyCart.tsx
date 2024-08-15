import React from 'react'
import ReloadPage from '../assets/Reload-page.svg'
import { SuccessProps } from '../types'

const EmptyCart = ({navigateTo}: SuccessProps) => {
  return (
    <div className="empty-page">
      <p>Parece que não há nada por aqui</p>
      <img src={ReloadPage} alt="Reload Page" />
      <button className="empty" onClick={() => navigateTo()}>
        Voltar
      </button>
    </div>
  )
}

export default EmptyCart

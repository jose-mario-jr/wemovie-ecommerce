import React from 'react'
import ReloadPage from '../assets/Reload-page.svg'

const EmptyPage = () => {
  return (
    <div className="empty-page">
      <p>Parece que não há nada por aqui</p>
      <img src={ReloadPage} alt="Reload Page" />
      <button className="empty" onClick={() => window.location.reload()}>
        Recarregar página
      </button>
    </div>
  )
}

export default EmptyPage

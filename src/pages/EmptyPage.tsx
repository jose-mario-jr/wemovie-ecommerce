import React from 'react'
import ReloadPage from '../assets/Reload-page.svg'
import Button from '../components/Button'

const EmptyPage = () => {
  return (
    <div className="empty-page">
      <p>Parece que não há nada por aqui</p>
      <img src={ReloadPage} alt="Reload Page" />
      <Button $maxW onClick={() => window.location.reload()}>
        Recarregar página
      </Button>
    </div>
  )
}

export default EmptyPage

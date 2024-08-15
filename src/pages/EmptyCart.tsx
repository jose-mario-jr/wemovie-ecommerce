import React from 'react'
import ReloadPage from '../assets/Reload-page.svg'
import { SuccessProps } from '../types'
import Button from '../components/Button'
import Text from '../components/Text'

const EmptyCart = ({ navigateTo }: SuccessProps) => {
  return (
    <div className="empty-page">
      <Text>Parece que não há nada por aqui</Text>
      <img src={ReloadPage} alt="Reload Page" />
      <Button onClick={() => navigateTo()}>Voltar</Button>
    </div>
  )
}

export default EmptyCart

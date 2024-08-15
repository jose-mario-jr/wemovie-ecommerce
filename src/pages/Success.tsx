import React from 'react'

import SuccessIcon from '../assets/Success.svg'
import { SuccessProps } from '../types'
import Button from '../components/Button'
import Text from '../components/Text'

const Success = ({ navigateTo }: SuccessProps) => {
  return (
    <div className="empty-page">
      <Text>Compra realizada com sucesso!</Text>
      <img src={SuccessIcon} alt="Success" />
      <Button onClick={() => navigateTo()}>Voltar</Button>
    </div>
  )
}

export default Success

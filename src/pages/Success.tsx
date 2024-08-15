import React from 'react'

import SuccessIcon from '../assets/Success.svg'
import { SuccessProps } from '../types'

const Success = ({ navigateTo }: SuccessProps) => {
  return (
    <div className="empty-page">
      <p>Compra realizada com sucesso!</p>
      <img src={SuccessIcon} alt="Success" />
      <button className="empty" onClick={() => navigateTo()}>
        voltar
      </button>
    </div>
  )
}

export default Success


import SuccessIcon from '../assets/Success.svg'

const Success = props => {
  return (
    <div className="empty-page">
      <p>Compra realizada com sucesso!</p>
      <img src={SuccessIcon} alt="Success Image" />
      <button className="empty" onClick={() => props.voltar()}>
        voltar
      </button>
    </div>
  )
}

export default Success

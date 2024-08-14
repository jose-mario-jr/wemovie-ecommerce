import AddCart from '../assets/AddCart.svg'

const MovieCart = props => {
  const { id, title, price, image } = props.movie

  return (
    <div className="movie-card">
      <div>
        <img className="cover" src={image} alt={title} />
        <p>{title}</p>
        <span>R$ {price}</span>
      </div>
      <button className="empty">
        <img src={AddCart} alt="Add to cart" />0 ADICIONAR AO CARRINHO
      </button>
    </div>
  )
}

export default MovieCart

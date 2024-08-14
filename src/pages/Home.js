import MovieCart from '../components/MovieCart'

const Home = props => {
  const { cart, setCart } = props

  return (
    <div className="movie-card-container">
      {props.movies.map(movie => (
        <MovieCart
          key={movie.id}
          movie={movie}
          cartCount={cart[movie.id]}
          setCart={setCart}
        />
      ))}
    </div>
  )
}

export default Home

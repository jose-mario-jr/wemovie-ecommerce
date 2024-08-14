import MovieCart from '../components/MovieCart'
import Loader from '../layout/Loader'
import EmptyPage from './EmptyPage'

const Cart = props => {
  const { cart, movies, setCart } = props

  const cartMovies = Object.keys(cart).map(id => movies.find(e => e.id == id))
  console.log({
    cartMovies,
    movies,
    keys: Object.keys(cart),
    km: Object.keys(cart).map(id => id),
    moviesFind: movies.find(e => e.id === 1),
  })
  return cartMovies.length > 0 ? (
    <div className="movie-card-container">
      {cartMovies.map(movie => (
        <MovieCart
          key={movie.id}
          movie={movie}
          cartCount={cart[movie.id]}
          setCart={setCart}
        />
      ))}
    </div>
  ) : (
    <EmptyPage />
  )
}

export default Cart

import MovieCard from '../components/MovieCard'
import Loader from '../layout/Loader'
import EmptyPage from './EmptyPage'
import { HomeProps } from '../types'

const Home = ({ cart, loading, movies, setCart }: HomeProps) => {
  return loading ? (
    <Loader />
  ) : movies.length > 0 ? (
    <div className="movie-card-container">
      {movies.map(movie => (
        <MovieCard
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

export default Home

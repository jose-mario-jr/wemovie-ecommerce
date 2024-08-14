import React from 'react'
import MovieCard from '../components/MovieCard.tsx'
import Loader from '../layout/Loader.tsx'
import EmptyPage from './EmptyPage.tsx'

const Home = props => {
  const { cart, loading, movies, setCart } = props

  return loading ? (
    <Loader />
  ) : movies.length > 0 ? (
    <div className="movie-card-container">
      {props.movies.map(movie => (
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

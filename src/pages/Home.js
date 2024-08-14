import MovieCart from '../components/MovieCart'

const Home = props => {
  return (
    <div>
      <div className="movie-card-container">
        {props.movies.map(movie => (
          <MovieCart key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home

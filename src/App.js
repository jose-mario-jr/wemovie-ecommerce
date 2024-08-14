import './App.css'
import Header from './layout/Header'
import Loader from './layout/Loader'
import EmptyPage from './pages/EmptyPage'
import Home from './pages/Home'
import { useEffect, useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://wefit-movies.vercel.app/api/movies')
      const data = await res.json()
      data?.products && setMovies(data.products)

      setLoading(false)
    }
    getData()
  }, [])

  return (
    <div className="App">
      <Header />
      {loading ? (
        <Loader />
      ) : movies.length > 0 ? (
        <Home movies={movies} />
      ) : (
        <EmptyPage />
      )}
    </div>
  )
}

export default App

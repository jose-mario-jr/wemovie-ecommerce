import './App.css'
import Header from './layout/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import { useEffect, useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [cart, setCart] = useState({})
  const [route, setRoute] = useState('home')

  useEffect(() => {
    document.location.href.includes('cart') && setRoute('cart')
    const getData = async () => {
      const res = await fetch('https://wefit-movies.vercel.app/api/movies')
      const data = await res.json()
      data?.products && setMovies(data.products)

      setLoading(false)
    }
    getData()
  }, [])

  const gotoRoute = r => {
    window.history.pushState({}, '', `/${r}`)
    setRoute(r || 'home')
  }
  return (
    <div className="App">
      <Header
        cart={cart}
        goHome={() => gotoRoute('')}
        gotoCart={() => gotoRoute('cart')}
      />
      {route === 'home' && (
        <Home loading={loading} movies={movies} cart={cart} setCart={setCart} />
      )}
      {route === 'cart' && (
        <Cart movies={movies} cart={cart} setCart={setCart} />
      )}
    </div>
  )
}

export default App

import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'
import Header from './layout/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Success from './pages/Success'
import { MovieType } from './types'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState<MovieType[]>([])
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

  const navigateTo = (r = '') => {
    window.history.pushState({}, '', `/${r}`)
    setRoute(r || 'home')
  }

  return (
    <div className="App">
      <Header cart={cart} route={route} navigateTo={navigateTo} />
      {route === 'home' && (
        <Home loading={loading} movies={movies} cart={cart} setCart={setCart} />
      )}
      {route === 'cart' && (
        <Cart
          movies={movies}
          cart={cart}
          setCart={setCart}
          navigateTo={navigateTo}
        />
      )}
      {route === 'success' && <Success navigateTo={navigateTo} />}
    </div>
  )
}

export default App

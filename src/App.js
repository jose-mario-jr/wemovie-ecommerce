import Loader from './assets/Loader.png'
import './App.css'
import Header from './layout/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <img src={Loader} className="loader" alt="Loader" />
    </div>
  )
}

export default App

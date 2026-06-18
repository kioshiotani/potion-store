import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


// testes
import Header from './components/Header'
import Footer from './components/Footer'
import History from './components/History'
import About from './components/About'
import Products from './components/Products'

function App() {
  return (
    <>
      <Header />
      <Products />
      <About />
      <History />
      <Footer />
    </>
  )
}

export default App

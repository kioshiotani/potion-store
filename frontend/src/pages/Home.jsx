// hooks
import { useWindowWidth } from '../hooks/useWindowWidth'

// components
import Header from '../components/Header'
import Footer from '../components/Footer'
import History from '../components/History'
import About from '../components/About'
import Products from '../components/Products'

// teste
import produtosTeste from '../produtosTeste'

export default function Home() {
  const width = useWindowWidth()

  return (
    <>
      <Header />
      <Products products={produtosTeste} mobile={width <= 1024 ? true : false}/>
      <About />
      <History />
      <Footer />
    </>
  )
}
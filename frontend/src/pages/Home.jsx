// hooks
import { useWindowWidth } from '../hooks/useWindowWidth'
import { useEffect, useState } from 'react'

// components
import Header from '../components/Header'
import Footer from '../components/Footer'
import History from '../components/History'
import About from '../components/About'
import Products from '../components/Products'

// services
import productService from '../services/product.service'

export default function Home() {
  const width = useWindowWidth()
  const [products, setProducts] = useState([]) 
  const [error, setError] = useState(null) 

  useEffect(() => {
    async function fetchData() {
      const res = await productService.getProducts()
      if (!res) {
        setError('Não foi possível carregar os produtos no momento. Tente mais tarde')
      } else {
        setProducts(res.data)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Header />
      {error && <p className="error">{error}</p>}
      <Products products={products} mobile={width <= 1024} />
      <About />
      <History />
      <Footer />
    </>
  )
}
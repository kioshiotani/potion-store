import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import ProductPage from './ProductPage'

export default function Products(props) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const getSlides = () => {
        if(props.mobile) {
            return props.products.map(product => [product])
        } else {
            const slides = []
            for(let i = 0; i < props.products.length; i += 6) {
                slides.push(props.products.slice(i, i + 6))
            }
            return slides
        }
    }


    const slides = getSlides()

    const handleSelect = (selectedIndex) => {
        setCurrentSlide(selectedIndex)
    }

    return (
        <div id="products" className="mx-md-5 shadow-lg p-md-5 p-4 d-flex flex-column">
            <h1 className="mx-auto display-4">Nossos Produtos</h1>
            <Carousel activeIndex={currentSlide} onSelect={handleSelect}>
                {slides.map((slideProducts, slideIndex) => (
                    <Carousel.Item key={slideIndex}>
                        <ProductPage mobile={props.mobile} products={slideProducts} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}
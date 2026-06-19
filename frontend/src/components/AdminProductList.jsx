import AdminProduct from './AdminProduct'
import { FaCirclePlus } from "react-icons/fa6";
import styles from './AdminProductList.module.css'
import RegisterForm from './RegisterForm'
import { useState, useEffect } from 'react'
import productService from '../services/product.service' 

export default function AdminProductList() {
  const [form, setForm] = useState(false)
  const [products, setProducts] = useState([])

    async function loadProducts() {
        const res = await productService.getProducts()
        if (res) {
            setProducts(res.data)
        } else {
            setError("Não foi possível carregar os produtos no momento.")
        }
    }

    async function handleDelete(id) {
        const res = await productService.deleteProduct(id)
        if (res) {
            setProducts(products.filter(product => product.id !== id))
        }
    }

    useEffect(() => {
        loadProducts()
    }, [])

    function handleShowRegister() {
        setForm(!form)
    }

    function handleSubmitted() {
        setForm(false)
        loadProducts() 
    }

    return (
        <>
        <div className="p-md-5 shadow-lg mx-md-5 mx-1 px-2">
            <div className="d-flex justify-content-between aling-items-center flex-row">
            <h1 className={`display-6 ${styles.header}`}>Produtos cadastrados</h1>
            <FaCirclePlus onClick={handleShowRegister} className={`fs-1 ${styles.plus}`}/>
            </div>
            <hr/>
            <div className={`d-flex flex-column gap-4 gap-md-5 justify-content-evenly my-4 my-md-5`}>
            { form && <RegisterForm submitted={handleSubmitted} /> }
            {products.map((product) => (
                <AdminProduct 
                key={product.id}
                id={product.id}
                price={product.price} 
                name={product.name} 
                desc={product.desc}
                onDelete={handleDelete}
                />
            ))}
            </div>
        </div>
        </>
    )
}
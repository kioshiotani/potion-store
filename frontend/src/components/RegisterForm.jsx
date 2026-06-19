import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react'
import styles from './RegisterForm.module.css'
import productService from '../services/product.service'

export default function RegisterForm(props) {
    const [formData, setFormData] = useState({
        name: "",
        desc: "",
        price: "",
        image: ""
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handlePriceChange(e) {
        const value = e.target.value;

        const regex = /^\d*(\.\d*)?$/;

        if (regex.test(value)) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        } 
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if(formData.name !== "" && formData.price !== "" && formData.image !== "") {
            const parsedPrice = parseFloat(formData.price).toFixed(2)

            const obj = {
                ...formData,
                price: parsedPrice
            }

            const res = await productService.registerProduct(obj)
            
            if(res.status === 201) {
                setFormData({
                    name: "",
                    desc: "",
                    price: "",
                    image: ""
                })

                props.submitted()
            } else {
                alert("Erro ao tentar registrar produto. Tente novamente.")
            }
        }
    }


    return (
    <form className={`${styles.form} p-3 p-md-5 shadow-lg`}>
        <div className="mb-3">
            <label for="productName" className="form-label">Nome do produto</label>
            <input name="name" onChange={handleChange} value={formData.name} type="text" className="form-control" id="productName" />
        </div>
        <div className="mb-3">
            <label for="productPrice" className="form-label">Preço do produto</label>
            <input name="price" onChange={handlePriceChange} value={formData.price} type="text" className="form-control" id="productPrice" />
        </div>
        <div className="mb-3">
            <label for="productDesc" className="form-label">Descrição do produto</label>
            <input name="desc" onChange={handleChange} value={formData.desc} type="text" className="form-control" id="productDesc" />
        </div>
        <div className="mb-3">
            <label for="productImage" className="form-label">URL da imagem do produto</label>
            <input name="image" onChange={handleChange} value={formData.image} type="text" className="form-control" id="productImage" />
        </div>
        <button type="submit" onClick={handleSubmit} className={`${styles.button} btn`}>Submit</button>
    </form>
    )
}


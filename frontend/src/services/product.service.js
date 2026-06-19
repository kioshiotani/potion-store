import axios from 'axios'

const PORT = 3000
const URL = 'http://localhost:' + PORT 

async function getProducts() {
    try {
    const res = await axios.get(URL + '/products')
    return res
    } catch(e){
        console.log(e)
        return null
    }
}

async function deleteProduct(id) {
    try {
        const res = await axios.delete(URL + '/products/' + id)
        return res
    } catch(e){
        console.log(e)
        return null
    }
}

async function registerProduct(productData) {
    try{
        const res = await axios.post(URL + '/products/', productData)
        return res
    } catch(e) {
        console.log(e)
        return null
    }
}


export default { getProducts, deleteProduct, registerProduct }
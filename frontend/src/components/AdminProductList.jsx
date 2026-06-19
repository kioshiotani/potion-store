import AdminProduct from './AdminProduct'
import { FaCirclePlus } from "react-icons/fa6";
import styles from './AdminProductList.module.css'
import RegisterForm from './RegisterForm'
import { useState } from 'react'

export default function AdminProductList() {
    const [form, setForm] = useState(false)

    function handleRegister() {
        setForm(!form)
    }

    return (
        <>
        <div className="p-md-5 shadow-lg mx-md-5 mx-1 px-2">
            <div class="d-flex justify-content-between aling-items-center flex-row">
            <h1 className={`display-6 ${styles.header}`}>Produtos cadastrados</h1>
            <FaCirclePlus onClick={handleRegister} className={`fs-1 ${styles.plus}`}/>
            </div>
            <hr/>
            <div className={`d-flex flex-column gap-4 gap-md-5 justify-content-evenly my-4 my-md-5`}>
            { form && <RegisterForm submitted={() => setForm(false)} /> }
            <AdminProduct price="124" name="Poção de Testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            </div>
        </div>
        </>
    )
}
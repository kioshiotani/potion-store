import AdminProduct from './AdminProduct'
import { FaCirclePlus } from "react-icons/fa6";

export default function AdminProductList() {
    return (
        <div className="p-md-5 shadow-lg mx-md-5 mx-1 px-2">
            <div class="d-flex justify-content-between aling-items-center flex-row">
            <h1 className="display-6">Produtos cadastrados</h1>
            <FaCirclePlus />
            </div>
            <hr/>
            <AdminProduct price="124" name="Poção de Testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </div>
    )
}
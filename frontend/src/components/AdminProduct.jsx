import styles from './AdminProduct.module.css'
import { BsTrash3 } from "react-icons/bs";


export default function AdminProduct(props) {

    function deleteHandler() {
        props.onDelete(props.id)
    }

    return(
        <div className={`fs-5 shadow-lg ${styles.box} justify-content-between py-4 px-md-5 p-2 d-flex just d-flex gap-1  align-items-center`}>
            <div className={`d-inline-flex gap-0 justify-content-md-between justify-content-start ${styles.text}`}>
                <span className={`${styles.name}`}>{props.name}</span>
                <span className={`${styles.desc} d-md-inline d-none`}>{props.desc}</span>
                <span className="d-md-inline d-none">${props.price}</span>
            </div>
            <BsTrash3 onClick={deleteHandler} className={`${styles.trash}`}/>
        </div>
    )
}
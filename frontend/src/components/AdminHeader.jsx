import styles from './Header.module.css'
import { GiPotionBall } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc"


export default function AdminHeader() {
    return (
        <>
        <header className={`bg-black mb-5 container-fluid p-0 px-3 w-100 d-flex justify-content-center justify-content-md-between align-items-center py-3 border-bottom border-2 border-dark gap-4`}> 
            <a className={`d-flex align-items-center gap-4 mx-md-2 text-decoration-none fs-4 ${styles.logo}`} href="#">
                <GiPotionBall className={`${styles.potion} h1`}/>
                <span className="text-alert">Poções e Soluções</span>
            </a>
            <span className="d-flex flex-row align-items-center gap-2"><VscAccount />Annabelle</span>
        </header>
        </>
    )
}
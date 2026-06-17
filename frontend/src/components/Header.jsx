import styles from './Header.module.css'
import { GiPotionBall } from "react-icons/gi";


export default function Header() {
    return (
        <>
        <header className={`mb-5 container-fluid p-0 w-100 d-flex justify-content-start align-items-center py-3 border-bottom border-2 border-dark gap-4`}> 
            <a className={`d-flex align-items-center gap-4 mx-2 text-decoration-none fs-4 ${styles.logo}`} href="#">
                <GiPotionBall className={`${styles.potion} h1`}/>
                <span className="text-alert">Poções e Soluções</span>
            </a>
            <ul className={`nav nav-pills ${styles.link}`}> 
                <li className="nav-item"><a href="#" className={`nav-link ${styles.link}`}>História</a></li> 
                <li className="nav-item"><a href="#" className={`nav-link ${styles.link}`}>Produtos</a></li> 
                <li className="nav-item"><a href="#" className={`nav-link ${styles.link}`}>Contato</a></li> 
                <li className="nav-item"><a href="#" className={`nav-link ${styles.link}`}>Sobre</a></li> 
            </ul>
        </header>
        </>
    )
}
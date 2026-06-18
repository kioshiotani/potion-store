import styles from './Footer.module.css'
import { FaWhatsapp } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"


export default function Footer() {
    console.log(`Conteúdo de module ${styles.footer}`)

    return(
        <>
        <footer className={`gap-3 mt-5 border-top border-2 border-dark p-3 container-fluid d-flex justify-content-center ${styles.footer} flex-column align-items-center`}>
            <div className={`${styles.footerTop} row d-flex justify-content-evenly align-items-center gap-4`}>
                <div className={`${styles.about} flex-column col-md-4 col-12 d-md-flex`}>
                    <h5>Sobre Poções e Soluções</h5>
                    <p>
                        Transforme seus desafios em conquistas com a magia da Poções e Soluções. Gerenciada por Annabelle 
                        Merigold, nossa loja oferece o equilíbrio perfeito entre tradição e eficácia, destacando-se pela 
                        poção que é segredo absoluto entre os melhores universitários: a Poção da Boa Nota.
                    </p>
                </div>
                <nav className={`${styles.links} col-12 col-md-3 d-flex flex-column justify-content-start align-items-start`}>
                    <h5>Links Úteis</h5>
                    <ul className={`p-0`}>
                        <li><a className={`nav-link`} href="#history">História</a></li>
                        <li><a className={`nav-link`} href="#">Produtos</a></li>
                        <li><a className={`nav-link`} href="#">Contato</a></li>
                        <li><a className={`nav-link`} href="#">Sobre</a></li>
                    </ul>
                </nav>
                <div className={`${styles.contact} d-flex flex-column col-12 col-md-3 gap-2`}> 
                    <h5>Contate-me</h5>
                    <span><FaWhatsapp /> (18) 98431-4234</span>
                    <span><MdOutlineEmail /> contato@pocoesesolucoes.com</span>
                </div>
            </div>
            <div className={`mt-4 mt-md-1 ${styles.copyright} container-fluid d-flex justify-content-center align-items-center flex-md-row flex-column gap-md-2`}>
                <span>Poções e Soluções.</span>
                <span>Todos os direitos reservados.</span>
            </div>
        </footer>
        </>
    )
}
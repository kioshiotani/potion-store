import styles from './Product.module.css'

export default function Product(props) {
  return (
    <div className={`p-2 card bg-dark text-white ${styles.card}`} >
    <img src={props.image} className={`h-50 card-img-top ${styles.image}`} />
    <div className="h-50 card-body d-flex flex-column justify-content-around">
        <h5 className={`card-title ${styles.name}`}>{props.name}</h5>
        <p className={`card-text overflow-y-auto ${styles.desc}`} >{props.desc}</p>
        <div className="d-flex flex-column justify-content-around gap-2 bottom-0"> 
          <p className="h5">$ {props.price}</p>
          <a href="#" className={`btn ${styles.button}`}>Comprar</a>
        </div>
    </div>
    </div> 
    );
}


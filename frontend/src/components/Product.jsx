export default function Product(props) {
  return (
    <div className="card bg-dark text-white" style={{width: '18rem', height: '32rem'}}>
    <img src={props.image} className="card-img-top" />
    <div className="card-body">
        <h5 className="card-title">Poção Mágica</h5>
        <p className="card-text overflow-scroll" style={{maxHeight: '15%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis quasi doloremque sed ipsa, eveniet illo, sapiente est cumque, modi obcaecati ducimus veniam nisi omnis. Necessitatibus, magnam odit! Tempora, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet esse ab aliquam dolorum, et maxime aperiam assumenda sequi minima odit officiis numquam iusto tenetur, corporis incidunt quos illo minus vel.</p>
        <p className="h5">$</p>
        <a href="#" className="btn btn-primary">Comprar</a>
    </div>
    </div> 
    );
}


import PotionStoreAnnabelleImage from '../../assets/images/PotionStoreAnnabelle.png'

export default function About() {

    return (
        <section id="about" className='mx-md-5 my-5 p-4 p-md-5 shadow-lg'>
            <h1 className="display-4">Sobre a nossa loja</h1>
            <div className="row">
                <div className="col-12 col-md-6 mb-3">
                    <p>Desde que Annabelle Marigold acendeu as luzes da Poções e Soluções pela primeira vez em 1867, 
                        a nossa jornada tem sido dedicada a transformar o impossível em realidade através da alquimia. 
                        O que começou como uma pequena botica de bairro, guiada pela intuição visionária de nossa fundadora, 
                        consolidou-se ao longo de mais de 150 anos como uma instituição de prestígio, onde a tradição e a eficácia 
                        caminham lado a lado. Acreditamos que a magia, quando aliada ao rigor de séculos de estudo, é a ferramenta 
                        mais poderosa para converter qualquer desafio em uma conquista memorável.</p>
                    <p>É essa dedicação à excelência que nos tornou o segredo mais bem guardado entre os universitários mais 
                        brilhantes da atualidade. Nossa poção exclusiva, a Poção da Boa Nota, é o resultado de uma fórmula que atravessa 
                        gerações, servindo como o suporte indispensável para quem busca clareza, foco e resultados extraordinários em suas 
                        jornadas acadêmicas.</p>
                    <p>Entendemos que o mundo evoluiu e, com ele, a necessidade de agilidade e precisão. Por isso, decidimos 
                        romper as barreiras físicas do nosso balcão histórico e expandir nossa presença para a internet. Esta 
                        nova fase digital mantém intacta a mesma precisão artesanal e o cuidado rigoroso com cada ingrediente 
                        que definiram nossa marca desde 1867, garantindo que a sabedoria secular de Annabelle Marigold chegue 
                        até você com a conveniência e a velocidade que o futuro exige. Na Poções e Soluções, nós não apenas 
                        criamos misturas; nós conectamos o legado do passado à sua vitória no presente, entregando a você o poder 
                        de moldar o seu próprio destino.</p>
                </div>
                <img className="col-12 col-md-6" src={PotionStoreAnnabelleImage}/>
            </div>
        </section>
    )
}
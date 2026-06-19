import model from '../models/product.model.js'

const produtos = [
  {
    name: "Poção Blue Sky",
    price: 300,
    desc: "Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds.",
    image: "https://i.ibb.co/ZzS7xb2/rsz-sky.png"
  },
  {
    name: "Poção do Perfume Misterioso",
    price: 200,
    desc: "Essa poção faz com que você fique cheirando lilís e groselha por 24 dias. Essência muito admirada pelos bruxos.",
    image: "https://i.ibb.co/pyhZJXf/rsz-lilas.png"
  },
  {
    name: "Poção de Pinus",
    price: 3000,
    desc: "Essa poção faz com que você fique 10 cm mais alto! Observação: efeitos colaterais desconhecidos.",
    image: "https://i.ibb.co/DkzdL1q/rsz-pinus.png"
  },
  {
    name: "Poção da Beleza Eterna",
    price: 100,
    desc: "Veneno que mata rápido.",
    image: "https://i.ibb.co/9p872NK/rsz-1beleza.png"
  },
  {
    name: "Poção do Arco Íris",
    price: 120,
    desc: "Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.",
    image: "https://i.ibb.co/PrC09MP/rsz-2unicornio.png"
  },
  {
    name: "Caldeirão das Verdades Secretas",
    price: 150,
    desc: "As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L.",
    image: "https://i.ibb.co/s9Lyvj8/rsz-verdades.png"
  }
];


export default async function seedData() {
    produtos.map(async (p) => {
        await model.create(p)
    })
}
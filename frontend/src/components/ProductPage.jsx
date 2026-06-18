import Product from './Product'

export default function ProductPage(props) {
    // props.mobile boolean
    // props.products
    // products
    //  image
    //  desc
    //  name
    //  price


    let page = ""

    if(!props.mobile) {
        const l1 = props.products.slice(0, 3)
        const l2 = props.products.slice(3, 6)
        page = (
            <div className="container-fluid p-5">
                <div className="justify-content-evenly d-flex my-5">
                    {l1.map((e, index) => {
                        return (
                            <Product key={index} name={e.name} image={e.image} desc={e.desc} price={e.price} />
                        )
                    })}
                </div>
                <div className="justify-content-evenly d-flex my-5">
                    {l2.map((e, index) => {
                        return (
                            <Product key={index} name={e.name} image={e.image} desc={e.desc} price={e.price} />
                        )
                    })}
                </div>
            </div>
        )
    } else {        
        page = (
            <div className="d-flex align-items-center justify-content-center">
                <Product price={props.products[0].price} image={props.products[0].image} name={props.products[0].name} desc={props.products[0].desc}/>
            </div>
        )
    }



    return (
        <>
            {page}
        </>
    )

}
import './Card.css'

export default function Card(props) {
    

    return (
        <div className="card">
            <div>
                <img src={props.produit.imgSrc} alt="" />
            </div>
            <div className='productDetails'>
                <p className="productName">{props.produit.productName}</p>
                <p className="prix">Prix: {props.produit.prix} €</p>
                <p className="stock">Sotck: {props.produit.stock} pcs</p>
            </div>
            <button> Acheter </button>
        </div>
    )
}
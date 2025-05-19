import './Card.css'

export default function Card(props) {
    

    return (
        <div className="card">
            <div>
                <img src={props.produit.imgSrc} alt="" />
            </div>
            <div>
                <p className="productName">{props.produit.productName}</p>
                <p className="prix">{props.produit.prix}</p>
                <p className="stock">{props.produit.stock}</p>
                <button> Acheter </button>
            </div>
        </div>
    )
}


export default function Card(props) {
    

    return (
        <div>
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
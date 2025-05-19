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
                <p className="stock">Stock: {props.produit.stock} pcs</p>
            </div>
            <button className={props.produit.stock === 1 ? "almost" : ""} disabled={props.produit.stock <=0}  onClick={() => props.handlePay(props.produit)}> {props.produit.stock ===1 ? "Plus qu'1 en stock" : "Acheter"} </button>
        </div>
    )
}
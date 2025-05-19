import "./Panier.css"

export default function Panier(props) {
    

    return (
        <div className="panier">
            <h2>Panier</h2>
            {props.panier.map((item, index) => (
                <div key={index} className="panier-item">
                <div> 
                    <img src={item.imgSrc} alt="" /> 
                </div>
                <div>
                    {item.productName} : {item.prix}€
                </div>
                </div>
            ))}
        </div>
    )
}
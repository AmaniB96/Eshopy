export default function Money(props) {
    
    
    return(
        <div>
            <h2>Mon argent: {props.money} €</h2>
            <button onClick={props.handleMoney}>Achat</button>
        </div>
    )
}
import './Money.css'
export default function Money(props) {
        
    return(
        <div className='title'>
            <h2>Mon argent: {props.money} €</h2>
        </div>
    )
}
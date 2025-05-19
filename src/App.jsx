import { useState } from 'react'
import './App.css'
import Money from './component/money'
import Card from './component/Card'
import product from "../public/data/product.json"
import Panier from './component/Panier'

function App() {
const [money,SetMoney] = useState(100000)
const [panier,SetPanier] = useState([])

const handlePay = (article) => {
  if (money >=article.prix) {
  SetMoney(money - article.prix)
  SetPanier([...panier,article])
 } else {
  alert("Pas assez d'argent!")
 }
}

const handleRetour = (article) => {
   console.log(article);
   SetMoney(money + article.prix)
   const newPanier = panier.filter((item) => item !== article)
   SetPanier(newPanier)
}

  return (
    <>
      <Money money={money} ></Money>

      <div className='card-container'>
        {product.map((productItem) => (
        <Card key={productItem.id} produit={productItem} handlePay={handlePay}></Card>))}
      </div>

      <Panier panier={panier} handleRetour={handleRetour}></Panier>
    </>
  )
}

export default App

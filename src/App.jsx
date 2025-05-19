import { useState } from 'react'
import './App.css'
import Money from './component/money'
import Card from './component/Card'
import product from "../public/data/product.json"
import Panier from './component/Panier'

function App() {
const [money,SetMoney] = useState(100000)
const [panier,SetPanier] = useState([])
const [products, SetProducts] = useState(product)


const handlePay = (article) => {

    let dejaAuPanier = false
    for(let i = 0; i < panier.length; i++) {
      if(panier[i].id === article.id) {
        dejaAuPanier = true
        panier[i].count = panier[i].count || 1
        panier[i].count++
      }
    }

    if (money >= article.prix) {
      SetMoney(money - article.prix)
      if(!dejaAuPanier) {
        // Add new article with count of 1
        SetPanier([...panier, {...article, count: 1}])
      } else {
        // Update panier to trigger re-render
        SetPanier([...panier])
      }
    
      article.stock -= 1
      SetProducts([...products])
    } else if(article.stock <= 0) {
      alert("Plus de stock")
    } else {
      alert("Pas assez d'argent!")
    }
}

const handleRetour = (article) => {

   console.log(article);
   SetMoney(money + article.prix)
   const newPanier = panier.filter((item) => item !== article)
   SetPanier(newPanier)


   article.stock += 1
   SetProducts([...products])
}

  return (
    <>
      <Money money={money} ></Money>

      <div className='card-container'>
        {product.map((productItem) => (
        <Card key={productItem.id} produit={productItem} handlePay={handlePay}></Card>))}
      </div>

      <Panier panier={panier}  handleRetour={handleRetour}></Panier>
    </>
  )
}

export default App

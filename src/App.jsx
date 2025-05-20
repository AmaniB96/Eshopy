import { useState } from 'react'
import './App.css'
import Money from './component/money'
import Card from './component/Card'
import product from "../public/data/product.json"
import Panier from './component/Panier'

function App() {
const [money,SetMoney] = useState(200000)
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
};

const handleRetour = (articleFromPanier) => { // articleFromPanier is the item object from the panier state

   // 1. Refund money
   SetMoney(money + articleFromPanier.prix);

   // 2. Update the panier (decrement count or remove item)
   const itemInPanier = panier.find(item => item.id === articleFromPanier.id);

   if (itemInPanier) {
       if (itemInPanier.count > 1) {
           // If count is more than 1, just decrement the count
           itemInPanier.count -= 1; // Mutate the count of the item in the current panier array
           SetPanier([...panier]);   // Create a new array reference for React to detect change
       } else {
           // If count is 1 (or less), remove the item entirely from the panier
           const newPanierArray = panier.filter(item => item.id !== articleFromPanier.id);
           SetPanier(newPanierArray);
       }
   }
   // If itemInPanier is not found, the panier state effectively remains unchanged for this step.
   // This shouldn't happen if handleRetour is called with a valid item from the panier.

   // 3. Update stock in the main products list
   // Find the corresponding product in your 'products' state array
   const productInProductsList = products.find(p => p.id === articleFromPanier.id);
   if (productInProductsList) {
       productInProductsList.stock += 1; // Directly mutate the stock of that product
   }
   // Create a new array reference for the products state to trigger a re-render
   SetProducts([...products]); 
};

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

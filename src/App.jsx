import { useState } from 'react'
import './App.css'
import Money from './component/money'
import Card from './component/Card'
import product from "../public/data/product.json"

function App() {
const [money,SetMoney] = useState(100000)

const handlePay = (article) => {
  SetMoney(money - article.prix)
}
  return (
    <>
      <Money money={money} ></Money>

      <div className='card-container'>
        {product.map((productItem) => (
        <Card key={productItem.id} produit={productItem} handlePay={handlePay}></Card>))}
      </div>
    </>
  )
}

export default App

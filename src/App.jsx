import { useState } from 'react'
import './App.css'
import Money from './component/money'
import Card from './component/Card'
import product from "../public/data/product.json"

function App() {
const [money,SetMoney] = useState(20)

const handleMoney = () => {
  SetMoney(money -1)
}



  return (
    <>
      <Money money={money} handleMoney={handleMoney}></Money>
      <div>
        {product.map((productItem) => (
        <Card key={productItem.id} produit={productItem} ></Card>))}
      </div>
    </>
  )
}

export default App

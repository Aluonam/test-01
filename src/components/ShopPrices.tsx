import { useState } from "react"

const initialProduct = [
    { 
        id: 1,
        name: 'cachopo',
        price: 30,
    },
    { 
        id: 2,
        name: 'chorizo a la sidra',
        price: 15,
    },
    { 
        id: 3,
        name: 'navajas',
        price: 25,
    }
]

const ShopPrices = () => {

    const [products, setProducts] = useState(initialProduct)
  return (
    <div>ShopPrices</div>
  )
}

export default ShopPrices
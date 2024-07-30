
import './App.css'
import { Counter } from './components/Counter/Counter'
// import ProductList from './components/ProductList'


// const initialProduct = [
//   { 
//       id: 1,
//       name: 'cachopo',
//       price: 30,
//   },
//   { 
//       id: 2,
//       name: 'chorizo a la sidra',
//       price: 15,
//   },
//   { 
//       id: 3,
//       name: 'navajas',
//       price: 25,
//   }
// ]


function App() {

  // const [products, setProducts] = useState(initialProduct)

  return (
    <>
      <div>
       <Counter></Counter>
        {/* ShopPrices
        <ProductList items={products} />
        <button onClick={()=>setProducts(changeOrderByPrice(products))}>Order by price</button> */}

      </div>
    </>
  )
}

export default App

import { useState } from "react"
import ProductList from "./ProductList"
import { useEffect } from "react"

function App() {
  const [cart, setCart] = useState([])
  const ProductListsData = [
    { id: 1, name: "Mouse", price: 500 },
    { id: 2, name: "Keyboard", price: 1000 },
    { id: 3, name: "Headset", price: 1500 }
  ]
  
  const handleAddToCart = (id) => {
    const selectedProduct = ProductListsData.find(product => product.id === id)
    const exists = cart.find(p => p.id ===  id)
    if (exists) {
      setCart((prev) =>
        prev.map(p =>
          p.id === id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      )

      console.log("It's already in the Cart")
      return
    }
    if(selectedProduct){
      setCart((prev) => [...prev, {...selectedProduct, quantity: 1}])
    }

  }
  return (
    <div>
      {cart.map(p => (
        <div key={p.id} style={{display: "flex", gap: "1rem", border: "1px solid white", width: "5rem"}}>
          <div>
            <p>Product: {p.name}</p>
            <p>Price: {p.price}</p>
            <p>Quantity: {p.quantity}</p>
            <button onClick={() => setCart(prev =>
                prev.map(prod =>
                  prod.id === p.id
                    ? { ...prod, quantity: 1 }
                    : prod
                )
              )}>
                Reset
            </button>

            <button onClick={() => setCart(prev =>
                prev.map(prod =>
                  prod.id === p.id
                    ? { ...prod, quantity: prod.quantity + 1 }
                    : prod
                )
              )}>
                +
            </button>

            <button onClick={() => setCart(prev =>
                prev.map(prod =>
                  prod.id === p.id
                    ? { ...prod, quantity: prod.quantity - 1  }
                    : prod
                )
              )} disabled={p.quantity === 0}>
                -
            </button>
          </div>
        </div>
      ))}
      <ProductList products={ProductListsData} addToCart={handleAddToCart}/>
    </div>
  )
}

export default App
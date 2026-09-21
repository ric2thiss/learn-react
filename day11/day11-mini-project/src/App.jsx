import React, { useContext, useEffect } from 'react'
import "./App.css"
import ProductCard from './components/ProductCard/ProductCard'
import {useProduct} from './hooks/useProduct'
import { useCart } from './hooks/useCart'
import Cart from './components/Cart/Cart'

function App() {
  const {products, searchResult, handleSearch} = useProduct()
  const {handleAddToCart, cart} = useCart()
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div>
      <Cart />
      <div className="search-container">
        <label htmlFor="search">Search products</label>

        <input
            id="search"
            type="text"
            placeholder="Search for a product..."
            onChange={(e) => handleSearch(e.target.value, products)}
        />

        <select onChange={(e) => handleSearch("",e.target.value)}>
          <option value="">Select</option>
          {categories.map(category => (
              <option key={category} value={category}>
                  {category}
              </option>
          ))}
        </select>
      </div>
        <ProductCard
          products={searchResult ?? products}
          handleAddToCart={handleAddToCart}
        />

     
    </div>
  )
}

export default App
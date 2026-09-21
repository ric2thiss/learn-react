import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {ProductsProvider}  from "./Contexts/ProductContext.jsx"
import {CartProvider} from "./Contexts/CartContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <ProductsProvider >
        <App />
      </ProductsProvider >
    </CartProvider>
  </StrictMode>,
)

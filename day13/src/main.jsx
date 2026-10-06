import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './features/products/ProductContext.jsx'
import { CartProvider } from './features/cart/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
  </StrictMode>
)

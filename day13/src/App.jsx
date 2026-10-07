import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import NotFoundPage from './pages/NotFoundPage'
import UseFetchDemoPage from './pages/UseFetchDemoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          {/* <Route path="/use-fetch-demo" element={<UseFetchDemoPage />} /> */}

          <Route path="/profile">
            <Route path="cart" element={<CartPage />} />
          </Route>

          <Route path="/products/:id" element={<ProductPage />} />
          <Route path='/products' element={<ShopPage />}/>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

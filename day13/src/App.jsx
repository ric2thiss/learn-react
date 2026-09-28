import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />

          <Route path='/profile'>
            <Route path='cart' element={<CartPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
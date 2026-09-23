import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import HeroSection from './components/Hero/HeroSection'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HeroSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
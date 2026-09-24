import React from 'react'
import HeroSection from '../components/Hero/HeroSection'
import ProductsSection from '../components/ProductsSection/ProductsSection'

function HomePage() {
  return (
    <main className='hero'>
      <HeroSection />
      <ProductsSection />
    </main>
  )
}

export default HomePage
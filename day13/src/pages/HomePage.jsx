import React from 'react'
import HeroSection from '../components/Hero/HeroSection'
import ProductsSection from '../components/ProductsSection/ProductsSection'
import ProductCollection from '../components/ProductCollection/ProductCollection'

function HomePage() {
  return (
    <main className='hero'>
      <HeroSection />
      <ProductsSection title={"This Week"}/>
      <ProductCollection />
    </main>
  )
}

export default HomePage
import React, { useEffect, useState } from 'react'
import "./HeroSection.css"
import "./SearchSection.css"
import SearchIcon from "../../assets/search-icon.png"
import ArrowIcon from '../../assets/arrow-icon.png'

function HeroSection() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    function getProducts() {
      fetch("https://dummyjson.com/products/category/mens-shirts?limit=2")
        .then(res => res.json())
        .then(data => {
          console.log(data)
          return setProducts(data.products)
        })
    }

    getProducts()
  }, [])

  return (
    <main className="hero">
      <div className="hero-tools">
        <div className="category-filter" aria-label="Product categories">
          <button type="button">Men</button>
          <button type="button">Women</button>
          <button type="button">Kids</button>
        </div>

        <form className="search-box" role="search" onSubmit={(event) => event.preventDefault()}>
          <img src={SearchIcon} alt="" />
          <input
            type="search"
            placeholder="Search"
            aria-label="Search products"
          />
        </form>
      </div>

      <section className="hero-showcase" aria-labelledby="collection-title">
        <div className="hero-copy">
          <div>
            <h1 id="collection-title">
              New <br />
              Collection
            </h1>

            <p className="hero-season">
              Summer <br />
              2024
            </p>
          </div>

          <a className="shop-button" href="#shop">
            <span>Go To Shop</span>
            <img src={ArrowIcon} alt="" />
          </a>
        </div>

        <div className="hero-products" id="shop">
          {products.map(product => (
            <article className="product-card" key={product.id}>
              <img
                className="product-card__image"
                src={product.thumbnail}
                alt={product.title}
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HeroSection

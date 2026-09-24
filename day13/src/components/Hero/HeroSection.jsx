import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./HeroSection.css"
import "./SearchSection.css"
import SearchIcon from "../../assets/search-icon.png"
import ArrowIcon from '../../assets/arrow-icon.png'
import { useProducts } from "../../hooks/useProducts"

function HeroSection() {
  const {
    productsByCategory,
    getAllProductsByCategory
  } = useProducts()

  useEffect(() => {
    getAllProductsByCategory("mens-shirts")
  }, [])

  return (
    <>
      <div className="hero-tools">
        <div className="category-filter" aria-label="Product categories">
          <button type="button">Men</button>
          <button type="button">Women</button>
          <button type="button">Kids</button>
        </div>

        <form
          className="search-box"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <img src={SearchIcon} alt="" />

          <input
            type="search"
            placeholder="Search"
            aria-label="Search products"
          />
        </form>
      </div>

      <section
        className="hero-showcase"
        aria-labelledby="collection-title"
      >
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

          <Link className="shop-button" to="/shop">
            <span>Go To Shop</span>
            <img src={ArrowIcon} alt="" />
          </Link>
        </div>

        <div className="hero-products" id="shop">
          {productsByCategory.length === 0 ? <p style={{textAlign: "center"}}>Loading ...</p>: productsByCategory.slice(0,2).map(product => (
            <article
              className="product-card"
              key={product.id}
            >
              <img
                className="product-card__image"
                src={product.thumbnail}
                alt={product.title}
              />
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HeroSection
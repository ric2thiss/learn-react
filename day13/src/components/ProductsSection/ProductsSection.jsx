import React from 'react'
import './ProductsSection.css'
import { useProducts } from "../../hooks/useProducts"

function ProductsSection() {
  const { products, isLoading, error } = useProducts()

  return (
    <section className="products-display-section">
      <h2 className="collection-title">This Week</h2>

      {isLoading && <p className="products-display-section__status">Loading products...</p>}
      {error && <p className="products-display-section__status">Unable to load products.</p>}

      {!isLoading && !error && (
        <div className="product-section">
          {products.map((product) => (
            <article className="weekly-product-card" key={product.id}>
              <div className="weekly-product-card__image-container">
                <img
                  className="weekly-product-card__image"
                  src={product.thumbnail}
                  alt={product.title}
                />

                <button
                  className="weekly-product-card__add-btn"
                  type="button"
                  aria-label={`Add ${product.title} to cart`}
                >
                  +
                </button>
              </div>

              <div className="weekly-product-card__info">
                <p className="weekly-product-card__category">{product.category}</p>

                <div className="weekly-product-card__details">
                  <h3 className="weekly-product-card__title">{product.title}</h3>
                  <p className="weekly-product-card__price">${product.price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductsSection

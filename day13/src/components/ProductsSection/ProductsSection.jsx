import React, { useEffect } from 'react'
import './ProductsSection.css'
import { useProducts } from "../../hooks/useProducts"
function ProductsSection() {
      const {productsByCategory} = useProducts()

  return (
    <section className='products-display-section'>
        <h1 className='collection-title'>This Week {productsByCategory.length}</h1>

        <div className="product-section">
        {productsByCategory.map((product) => (
            <article className="product-card" key={product.id}>

                <div className="product-card__image-container">
                    <img
                        className="product-card__image"
                        src={product.thumbnail}
                        alt={product.title}
                    />

                    <button
                        className="product-card__add-btn"
                        type="button"
                    >
                        +
                    </button>
                </div>

                <div className="product-card__info">
                    <p className="product-card__category">
                        {product.category}
                    </p>

                    <div className="product-card__details">
                        <h3 className="product-card__title">
                            {product.title}
                        </h3>

                        <p className="product-card__price">
                            ${product.price}
                        </p>
                    </div>
                </div>

            </article>
        ))}
        </div>
    </section>
  )
}

export default ProductsSection
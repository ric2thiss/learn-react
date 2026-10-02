import React, { useEffect, useRef, useState } from 'react'
import './ProductsSection.css'
import { useProducts } from "../useProducts"


function ProductsSection({ title }) {
    const { products, isLoading, error, filterProducts, filteredProducts } = useProducts()

    // Handle Product this week section to scroll sidewards
    const productSectionRef = useRef(null)
    function handleScroll(direction) {
        const container = productSectionRef.current

        if (!container) return

        const amountScroll = 400

        container.scrollBy({
            left: direction === "left"
                ? -amountScroll
                : amountScroll,
            behavior: "smooth"
        })
    }
    

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    if (!products || products.length === 0) {
        return <p>No Products Found!</p>
    }

    const latestTimestamp = Math.max(
        ...products.map(product => Date.parse(product.meta.createdAt))
    )

    const sevenDaysAgoTimestamp =
        latestTimestamp - (7 * 24 * 60 * 60 * 1000)

    const recentProducts = products.filter(product =>
        Date.parse(product.meta.createdAt) >= sevenDaysAgoTimestamp
    )

    const categories = [
        ...new Set(products.map(product => product.category))
    ]

    return (
        <section className="products-display-section">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <h1 className="collection-title">
                    This Week ({recentProducts.length})
                </h1>

                {title === "This Week" && (
                    <select
                        onChange={(event) => filterProducts(event.target.value)}
                        style={{ height: "2rem" }}
                    >
                        <option value="">All Categories</option>

                        {categories.map(category => (
                            <option value={category} key={category}>
                                {category.toUpperCase()}
                            </option>
                        ))}
                    </select>
                )}
            </div>

            <div
                className="product-section"
                ref={productSectionRef}
            >
                {recentProducts.map(product => (
                    <article
                        className="product-card"
                        key={product.id}
                    >
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

            <div className="product-navigation">
                <button
                    type="button"
                    onClick={() => handleScroll("left")}
                    aria-label="Previous products"
                >
                    ‹
                </button>

                <button
                    type="button"
                    onClick={() => handleScroll("right")}
                    aria-label="Next products"
                >
                    ›
                </button>
            </div>
        </section>
    )
}

export default ProductsSection

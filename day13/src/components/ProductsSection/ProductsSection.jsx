import React, { useRef } from 'react'
import './ProductsSection.css'
import { useProducts } from "../../hooks/useProducts"

function ProductsSection({title}) {
    const { products, filterProductsLists, isLoading } = useProducts()

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


    const latestTimestamp = products.length > 0 ? Math.max(...products.map(product => Date.parse(product.meta.createdAt))):null;
    
    const sevenDaysAgoTimestamp = latestTimestamp - (7*24*60*60*1000)

    const recentProducts = products.filter(prod => {
        if (!sevenDaysAgoTimestamp) return false;
        return Date.parse(prod.meta.createdAt) >= sevenDaysAgoTimestamp;
    });

    const categories = [...new Set(products.map(prod => prod.category))]

    return (
        <section className="products-display-section">
            <div style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                <h1 className="collection-title">
                    {title === "This Week" ?  `This Week (${recentProducts.length})`: title} 
                </h1>
                {title === "This Week" && 
                <select onChange={(e)=> filterProductsLists(e.target.value)} style={{height:"2rem"}}>
                    <option>Select Filter</option>
                    {categories.map(prod => (
                        <option value={prod} key={prod}>{prod.toUpperCase()}</option>
                    ))}
                </select>
                }
                
            </div>

            <div
                className="product-section"
                ref={productSectionRef}
            >
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    (recentProducts?.length > 0 ? recentProducts : products).map((product) => 
                    
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
                    )
                )}
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
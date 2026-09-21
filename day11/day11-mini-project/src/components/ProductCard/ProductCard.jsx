import React from 'react'
import "./ProductCard.css";

function ProductCard({ products, handleAddToCart }) {
    return (
        <div className="product-grid">
            {products.map((product) => (
                <div className="product-card" key={product.id}>

                    <img
                        className="product-image"
                        src={product.thumbnail}
                        alt={product.title}
                    />

                    <div className="product-info">

                        <h2 className="product-title">
                            {product.title}
                        </h2>

                        <p className="product-description">
                            {product.description}
                        </p>

                        <div className="product-price">
                            ${product.price}
                        </div>

                        <div className="product-rating">
                            ⭐ {product.rating}
                        </div>

                        <button className="add-cart-btn" onClick={()=> handleAddToCart(product.id)}>
                            Add to Cart
                        </button>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default React.memo(ProductCard);
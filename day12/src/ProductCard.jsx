
import React from "react";
import { useProduct } from "./useProduct";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, isProductDetailsPage }) {
    const { handleAddToCart } = useProduct();
    const navigate = useNavigate();

    return (
        <div className="product-card">

            <div className="product-image-container">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="product-image"
                />

                <span className="product-discount">
                    -{Math.round(product.discountPercentage)}%
                </span>
            </div>

            <div className="product-info">

                <span className="product-category">
                    {product.category}
                </span>

                <h2 className="product-title">
                    {product.title}
                </h2>

                <div className="product-rating">
                    ⭐ {product.rating}
                </div>

                <div className="product-price">
                    ${product.price}
                </div>

                <button
                    className="add-cart-button"
                    onClick={() => handleAddToCart(product.id)}
                >
                    🛒 Add to Cart
                </button>
                {!isProductDetailsPage && ( 
                    <button className="add-cart-button" 
                        onClick={() => navigate(`/products/${product.id}`)} 
                        style={{ marginTop: ".5rem" }} > View 
                    </button> )}
               

            </div>
        </div>
    );
}

export default ProductCard;


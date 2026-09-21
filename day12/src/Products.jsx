
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useProduct } from "./useProduct";
import ProductCard from "./ProductCard";
import "./Products.css";

function Products() {
    const { id } = useParams();
    const { findProduct, products } = useProduct();
    // const location = useLocation();
    // const path = location.pathname.split("/")
   
    if (products.length === 0) {
        return <h1>Loading...</h1>;
    }

    // Single product
    if (id) {
        const product = findProduct(Number(id));

        if (!product) {
            return <h1>Product not found</h1>;
        }

        return (
            <div className="single-product">
                <ProductCard product={product} isProductDetailsPage={Boolean(id)} />
            </div>
        );
    }

    // All products
    return (
        <div className="products-page">
            <div className="products-header">
                <span>OUR COLLECTION</span>
                <h1>Products</h1>
                <p>
                    Browse our collection and find something you'll love.
                </p>
            </div>

            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
            
        </div>
    );
}

export default Products;


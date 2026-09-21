import React from "react";

const ProductCard = React.memo(({ products, handleAddToCart }) => {
    // console.log("Child Rendered")
    return (
        <>
            {products.map((product) => (
                <div key={product.id}>
                    <p>
                        {product.id}. {product.title}
                    </p>

                    <p>${product.price}</p>

                    <button onClick={handleAddToCart} id={product.id}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </>
    );
});

export default ProductCard;
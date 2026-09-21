import React from 'react'

function ProductList({products, addToCart}) {

  return (
    <div style={{display: "flex", gap: "1rem"}}>
        {products.map(product => (
            <div key={product.id} style={{border: "1px solid white", width: "250px"} }>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button onClick={()=>addToCart(product.id)}>Add to Cart</button>
            </div>
        ))}
    </div>
  )
}

export default ProductList
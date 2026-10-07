import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { getProducts } from '../productService'

function Products() {
    const {data:products, isLoading, error } = useFetch(getProducts)
    if(isLoading) return <p>Products is being fetch...</p>
    if(error) return <p>Having an Error during fetching!</p>
  return (
    <div>
        {products.map(p => p.price < 20 && <p>{p.title} | {p.price}</p>)}
    </div>
  )
}

export default Products
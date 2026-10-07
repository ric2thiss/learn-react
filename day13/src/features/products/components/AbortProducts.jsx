import React from 'react'
import { useProducts } from '../useProducts'

function AbortProducts() {
    const {products, isLoading, error} = useProducts
  return (
    <div>AbortProducts</div>
  )
}

export default AbortProducts
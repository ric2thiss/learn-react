import React, { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts';

function ProductPage() {
    const { id } = useParams();
    // Assuming getProduct from useProducts is already stable or memoized inside the hook.
    // If it isn't, we wrap our caller logic in a stable useCallback here.
    const { getProduct, product } = useProducts();

    const fetchProductData = useCallback(async (productId) => {
      if (!productId) return;
      await getProduct(productId);
    }, [getProduct]);

    useEffect(() => {
      fetchProductData(id);
    }, [id, fetchProductData]);

  // 1. Check if there is no ID in the URL path
  if (!id) {
    return <div style={styles.error}>No product ID provided.</div>;
  }

  // 2. Check loading state (assuming your hook sets product to null/undefined while loading)
  // Note: If your hook sets an explicit 'loading' boolean, use that instead.
  if (product === undefined) {
    return <div style={styles.loading}>Loading product details...</div>;
  }

  // 3. Check if the fetch finished but returned no data (e.g., 404 or empty response)
  if (product === null) {
    return <div style={styles.error}>No product found.</div>;
  }

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"80dvh"}}>
        <div style={styles.card}>
            <div style={styles.imageContainer}>
                <img src={product.thumbnail} alt={product.title} style={styles.image} />
            </div>
            <div style={styles.detailsContainer}>
                <h1 style={styles.title}>{product.title}</h1>
                <p style={styles.price}>${product.price}</p>
                <p style={styles.description}>{product.description}</p>
                <button style={styles.button}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '800px',
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden'
    },
    imageContainer: {
        flex: '1 1 350px',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        maxHeight: '400px',
        objectFit: 'cover'
    },
    detailsContainer: {
        flex: '1 1 350px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        fontSize: '2rem',
        margin: '0 0 10px 0',
        color: '#222'
    },
    price: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#0070f3',
        margin: '0 0 20px 0'
    },
    description: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#666',
        margin: '0 0 30px 0'
    },
    button: {
        padding: '12px 24px',
        backgroundColor: '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        alignSelf: 'flex-start'
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        fontSize: '1.2rem',
        color: '#666',
        fontFamily: 'system-ui, sans-serif'
    },
    error: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        fontSize: '1.2rem',
        color: '#ff3333',
        fontWeight: '500',
        fontFamily: 'system-ui, sans-serif'
    }
};

export default ProductPage

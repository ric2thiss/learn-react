import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts';
import {useCarts} from '../hooks/useCarts'

function ProductPage() {
    const { id } = useParams();
    const { getProduct, product, isLoading, error } = useProducts();
    const {handleAddToCart} = useCarts()

    useEffect(() => {
        getProduct(id);
    }, [id]);

    if (isLoading) {
        return <div style={styles.loading}>Loading product details...</div>;
    }

    if (error) {
        return <div style={styles.error}>{error}</div>;
    }

    if (!product) {
        return <div style={styles.error}>Product not found.</div>;
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
                    <button style={styles.button} onClick={()=> handleAddToCart(product.id)}>Add to Cart</button>
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

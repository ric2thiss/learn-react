import React, { useMemo } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useCarts } from '../../hooks/useCarts';
import { NavLink } from 'react-router-dom';

function ProductCollection() {
  const { products, filteredProducts } = useProducts();
  const { handleAddToCart } = useCarts();

  const displayedProducts = useMemo(() => {
    return filteredProducts ?? products;
  }, [products, filteredProducts]);

  if(displayedProducts.length === 0){
    return <p>No Products Found!</p>
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="collection-title">
          XIV <br /> Collections <br /> 23-24
        </h1>
      </div>

      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '15px',
          width: '100%',
          maxWidth: '100%',
          marginTop: '2rem',
          paddingBottom: '12px',
        }}
      >
        {displayedProducts?.map((product) => (
          <article className="product-card" style={{ flex: '0 0 450px' }} key={product.id}>
            <div className="product-card__image-container">
              <img className="product-card__image" src={product.thumbnail} alt={product.title} />
              <button
                className="product-card__add-btn"
                type="button"
                onClick={() => {
                  handleAddToCart(product.id);
                }}
              >
                +
              </button>
            </div>

            <div className="product-card__info">
              <p className="product-card__category">{product.category}</p>
              <div className="product-card__details">
                <NavLink to={`/products/${product.id}`}>
                  <h3 className="product-card__title">{product.title}</h3>
                </NavLink>
                <p className="product-card__price">\${product.price}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ProductCollection;

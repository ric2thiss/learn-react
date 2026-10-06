import { NavLink } from "react-router-dom";
import { useProducts } from "../useProducts";
import { useCarts } from "../../cart/useCarts";
import "./ProductsSection.css";

function ProductCollection() {
    const { products, isLoading, error, filteredProducts } = useProducts();
    const { handleAddToCart } = useCarts();

    const displayedProducts = filteredProducts ?? products;

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (displayedProducts.length === 0) return <p>No Products Found!</p>;

    return (
        <section className="products-display-section">
            <h1 className="collection-title">
                XIV <br /> Collections <br /> 23-24
            </h1>

            <div className="product-collection">
                {displayedProducts.map((product) => (
                    <article className="product-card" key={product.id}>
                        <div className="product-card__image-container">
                            <img
                                className="product-card__image"
                                src={product.thumbnail}
                                alt={product.title}
                            />
                            <button
                                className="product-card__add-btn"
                                type="button"
                                onClick={() => handleAddToCart(product.id)}
                                aria-label={`Add ${product.title} to cart`}
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
                                <p className="product-card__price">${product.price}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ProductCollection;

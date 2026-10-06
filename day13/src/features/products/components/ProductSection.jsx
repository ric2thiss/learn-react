import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./ProductsSection.css";
import { useProducts } from "../useProducts";
import { useCarts } from "../../cart/useCarts";

function ProductSection({ title }) {
    const { products, isLoading, error, filterProducts, filteredProducts } = useProducts();
    const { handleAddToCart } = useCarts();
    const productSectionRef = useRef(null);

    function handleScroll(direction) {
        const container = productSectionRef.current;
        if (!container) return;

        container.scrollBy({
            left: direction === "left" ? -400 : 400,
            behavior: "smooth",
        });
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (products.length === 0) return <p>No Products Found!</p>;

    const validDates = products
        .map((product) => Date.parse(product.meta?.createdAt))
        .filter(Number.isFinite);

    const latestTimestamp = validDates.length ? Math.max(...validDates) : null;
    const sevenDaysAgoTimestamp = latestTimestamp
        ? latestTimestamp - 7 * 24 * 60 * 60 * 1000
        : null;

    const recentProducts = latestTimestamp
        ? products.filter(
              (product) => Date.parse(product.meta?.createdAt) >= sevenDaysAgoTimestamp
          )
        : products;

    const displayedProducts = filteredProducts
        ? recentProducts.filter((product) =>
              filteredProducts.some((filteredProduct) => filteredProduct.id === product.id)
          )
        : recentProducts;

    const categories = [...new Set(products.map((product) => product.category))];

    return (
        <section className="products-display-section">
            <div className="products-section__header">
                <h1 className="collection-title">
                    {title} ({displayedProducts.length})
                </h1>

                {title === "This Week" && (
                    <select
                        onChange={(event) => filterProducts(event.target.value)}
                        aria-label="Filter products by category"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option value={category} key={category}>
                                {category.toUpperCase()}
                            </option>
                        ))}
                    </select>
                )}
            </div>

            <div className="product-section" ref={productSectionRef}>
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

            <div className="product-navigation">
                <button type="button" onClick={() => handleScroll("left")} aria-label="Previous products">‹</button>
                <button type="button" onClick={() => handleScroll("right")} aria-label="Next products">›</button>
            </div>
        </section>
    );
}

export default ProductSection;

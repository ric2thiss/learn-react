import { useFetch } from "../hooks/useFetch";
import { getProducts } from "../services/productService";

function UseFetchDemoPage() {
    const {
        data: products,
        isLoading,
        error,
    } = useFetch(getProducts);

    if (isLoading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!products || products.length === 0) {
        return <p>No products found.</p>;
    }

    return (
        <main>
            <h1>Products</h1>

            {products.map((product) => (
                <article key={product.id}>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                </article>
            ))}
        </main>
    );
}

export default UseFetchDemoPage;

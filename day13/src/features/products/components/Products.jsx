import { useSearchParams } from "react-router-dom";
import { useProducts } from "../useProducts";

function Products() {
  const [searchParams] = useSearchParams();
  const { products, isLoading, error } = useProducts();
  const search = (searchParams.get("search") ?? "").trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p role="alert">Failed to load products: {error}</p>;

  return (
    <section>
      <h1>{search ? `Search results for: ${search}` : "Products"}</h1>
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        filteredProducts.map((product) => (
          <p key={product.id}>
            {product.title} | ${product.price}
          </p>
        ))
      )}
    </section>
  );
}

export default Products;

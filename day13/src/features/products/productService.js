const url = "https://dummyjson.com/products";

export async function getProducts(signal) {
  const response = await fetch(`${url}?limit=1000`, { signal });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  return data.products;
}

export async function getProductById(id) {
  const response = await fetch(`${url}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}

const url = "https://dummyjson.com/products"

export async function getProducts(){
    try {
        const res = await fetch(url)
        if(!res.ok) throw new Error("Failed to fetch product")
        const data = await res.json()
        return data.products  
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
    }
}

export async function getProductById(id) {
    try {
        const res = await fetch(`${url}/${id}`);

        if (!res.ok) throw new Error("Failed to fetch product");

        const data = await res.json();
        return data; // single product object
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
    }
}
export async function getProductsByCategory(category) {
    try {
        const res = await fetch(`${url}/category/${category}`);

        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        return data.products;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}
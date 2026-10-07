const url = "https://dummyjson.com/products"

export async function getProducts(signal){
    try {
        const res = await fetch(`${url}?limit=1000`, {signal})
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
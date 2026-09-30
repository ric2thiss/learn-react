const url = "https://dummyjson.com/products"

export async function getProducts(){
    try {
        const res = await fetch(`${url}?limit=1000`)
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

// export async function filterdProducts(category){
//     const api = `https://dummyjson.com/products/category/${category}?limit=1000`
    
//     try {
//         const res = await fetch(api);
//         if(!res.ok) throw new Error("Failed to fetch product by category");

//         const data = await res.json();
//         return data.products;
//     } catch (error) {
//         console.error("Error fetching products by category:", error);
//         throw error;
//     }
// }
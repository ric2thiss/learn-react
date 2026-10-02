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
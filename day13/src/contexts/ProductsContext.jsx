import { createContext, useEffect, useState } from "react";
import { getProducts, getProductById } from "../services/productService";

export const ProductsContext = createContext(null);

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [productById, setProductById] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadProducts() {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        loadProducts();
    }, []);

    async function getProduct(id) {
        try {
            setError(null);
            const data = await getProductById(id);
            setProductById(data);
            return data;
        } catch (error) {
            setError(error.message);
            throw error;
        }
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                productById,
                isLoading,
                error,
                getProduct
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

import { createContext, useEffect, useState } from "react";
import {
    getProducts,
    getProductById,
} from "../services/productService";

export const ProductsContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

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

    function filterProducts(filter) {
        if(!filter){
            setFilteredProducts(null);
            return;
        }
        const result = products.filter((prod)=> prod.category === filter);
        setFilteredProducts(result);
    }

    async function getProduct(id) {
        try {
            setIsLoading(true);
            setError(null);
            setProduct(null);

            const data = await getProductById(id);

            setProduct(data);
            return data;
        } catch (error) {
            setError(error.message);
            setProduct(null);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                product,
                filteredProducts,
                isLoading,
                error,
                getProduct,
                filterProducts
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

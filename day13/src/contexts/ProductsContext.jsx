import { createContext, useEffect, useState } from "react";
import {
    getProducts,
    getProductById,
    getProductsByCategory
} from "../services/productService";

export const ProductsContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [productById, setProductById] = useState(null);

    useEffect(() => {
        async function loadProducts() {
            const data = await getProducts();
            setProducts(data);
        }

        loadProducts();
    }, []);

    async function getProduct(id) {
        const data = await getProductById(id);
        setProductById(data);
    }

    async function getAllProductsByCategory(category) {
        const data = await getProductsByCategory(category);
        setProductsByCategory(data);
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                productsByCategory,
                productById,
                getProduct,
                getAllProductsByCategory
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}
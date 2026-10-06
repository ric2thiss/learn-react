import { createContext, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { getProducts } from "./productService";

export const ProductContext = createContext(null);

export function ProductProvider({ children }) {
    const { data: products = [], isLoading, error } = useFetch(getProducts);
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : null;

    function filterProducts(category) {
        setSelectedCategory(category);
    }

    return (
        <ProductContext.Provider
            value={{
                products,
                isLoading,
                error,
                filteredProducts,
                filterProducts,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

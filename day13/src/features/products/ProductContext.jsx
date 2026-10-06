import { createContext, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import {getProducts} from "./productService"

export const ProductContext = createContext();

export function ProductProvider({children}){
    const {data:products, isLoading, error} = useFetch(getProducts)
    const [filteredProducts, setFilteredProducts] = useState(null)

    function filterProducts(category) {
        if(!category){
            setFilteredProducts(null);
            return;
        }
        const result = products.filter((prod)=> prod.category === category);
        setFilteredProducts(result);
    }

    return (
        <ProductContext.Provider value={{
            products,
            isLoading,
            error,
            filteredProducts,
            filterProducts
        }}>
            {children}
        </ProductContext.Provider>
    )
}
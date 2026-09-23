import { createContext, useState } from "react";

export const ProductsContext = createContext();

export function ProductProvider({children}){
    const [products, setProducts] = useState([]);
    
    return(
        <ProductProvider.Provider value={products}>
            {children}
        </ProductProvider.Provider>
    )
}
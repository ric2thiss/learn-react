
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();

            setProduct(data.products);
        };

        getData();
    }, []);

    return (
        <ProductContext.Provider value={{ products, cartItems, setCartItems }}>
            {children}
        </ProductContext.Provider>
    );
}


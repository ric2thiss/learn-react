import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductsProvider({children}){
    const [products, setProducts] = useState([]);
    const [searchResult, setSearchResult] = useState(null);

    useEffect(()=> {
        try {
            getAllProducts()
        } catch (error) {
            console.log("Error", error)
        }
        
    },[])

    function getAllProducts(){
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.products));
    }

    

    return(
        <ProductContext.Provider value={{products, setSearchResult, getAllProducts, searchResult}}>
            {children}
        </ProductContext.Provider>
    )
}
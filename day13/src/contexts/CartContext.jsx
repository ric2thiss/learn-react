import { createContext, useState } from "react";
import { getProductById } from "../services/productService";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    async function handleAddToCart(id) {
        try { 
            
            const product = await getProductById(id);

            setCart((prev)=>{
                const isExist = prev.some(prod => prod.id === id)

                if(isExist){
                    return prev.map((prod)=> 
                        prod.id === id ?
                        {...prod, quantity: prod.quantity + 1}:prod
                    )
                }

                return [...prev, {...product, quantity: 1}]
            })
        } catch (error) {
            console.error("Failed to add product to cart:", error);
        }
    }

    function handleAddQuantity(id){
        setCart((prev)=> 
            prev.map(prod => prod.id === id ? {...prod, quantity: prod.quantity + 1}:prod)
        )
    }

    function handleDecrementQuantity(id){
        setCart((prev)=> 
            prev.map(prod => prod.id === id ? {...prod, quantity: prod.quantity === 1? 1 : prod.quantity - 1}:prod)
        )
    }

    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleAddQuantity, handleDecrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

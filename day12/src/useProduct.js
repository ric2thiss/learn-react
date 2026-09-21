
import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export function useProduct() {
    const {
        products,
        cartItems,
        setCartItems
    } = useContext(ProductContext);

    function handleAddToCart(id) {
        const isExist = cartItems.some(product => product.id === id);

        if (isExist) {
            setCartItems(prev => {
                return prev.map(product =>
                    product.id === id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
            });
        } else {
            setCartItems(prev => [
                ...prev,
                {
                    ...products.find(product => product.id === id),
                    quantity: 1
                }
            ]);
        }
    }

    function findProduct(id){
        return products.find(product => product.id === id)
    }

    return {
        products,
        cartItems,
        findProduct,
        handleAddToCart
    };
}


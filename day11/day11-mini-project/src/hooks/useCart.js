import { useContext, useCallback } from "react";
import { CartContext } from "../Contexts/CartContext";

export function useCart() {
    const { cart, setCart } = useContext(CartContext);

    const handleAddToCart = useCallback((id) => {
         fetch(`https://dummyjson.com/products/${id}`)
            .then(res => {
                console.log("2. Fetch response received");
                return res.json();
            })
            .then(data => {
                console.log("3. Product fetched:", data);

                setCart(prev => {
                    console.log("4. Previous cart:", prev);

                    const isExist = prev.some(
                        product => product.id === data.id
                    );

                    let newCart;

                    if (isExist) {
                        newCart = prev.map(product =>
                            product.id === data.id
                                ? {
                                    ...product,
                                    quantity: product.quantity + 1
                                }
                                : product
                        );
                    } else {
                        newCart = [
                            ...prev,
                            {
                                ...data,
                                quantity: 1
                            }
                        ];
                    }

                    console.log("5. Updated cart:", newCart);

                    return newCart;
                });
            })
            .catch(error => {
                console.log("Error in add to cart:", error);
            });
    }, [setCart]);

    function handleIncrementAndDecrementOfCartQuantity(id, operator) {
        setCart(prev =>
            prev.map(product =>
                product.id === id
                    ? { ...product, quantity: operator === "decrement"? product.quantity === 0? 0:product.quantity - 1: product.quantity + 1 }
                    : product
            )
        );
    }

    function handleSearch(searchInput, products) {
        if(searchInput === ""){
            return products
        }
        
        const searched = products.filter((product)=> product.title.toLowerCase().includes(searchInput.toLowerCase()))

        return searched
    }

    return {
        handleAddToCart,
        handleIncrementAndDecrementOfCartQuantity,
        handleSearch,
        cart,
    };
}
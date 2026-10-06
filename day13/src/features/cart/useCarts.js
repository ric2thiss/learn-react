import { useContext } from "react";
import { CartContext } from "./CartContext";

export function useCarts() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCarts must be used inside CartProvider");
    }

    return context;
}

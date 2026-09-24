import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

export function useProducts() {
    const context = useContext(ProductsContext);

    if (!context) {
        throw new Error("useProducts must be used inside ProductProvider");
    }

    return context;
}

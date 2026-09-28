import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function useCarts(){
    return useContext(CartContext)
}
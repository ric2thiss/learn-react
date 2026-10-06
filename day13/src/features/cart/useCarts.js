import { useContext } from "react";
import { CartContext } from "./CartContext";

export function useCarts(){
    return useContext(CartContext)
}
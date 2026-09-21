import { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function App() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [name, setName] = useState("")

    async function fetchData() {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();

            setProducts(data.products);
        } catch (error) {
            console.error(error);
        }
    }

    // async function getProduct(id) {
    //     try {
    //         const res = await fetch(
    //             `https://dummyjson.com/products/${id}`
    //         );

    //         const data = await res.json();
            
    //         setProduct((prev)=> {
    //             const prod = product.find(p => p.id === data.id)
    //             let quantity = prod?quantity+1:1
    //             if(prod){
    //                 return prev.map(p => 
    //                     p.id === data.id?
    //                     {...p, quantity: quantity}: p
    //                 )
    //             }else{
    //                 return [
    //                     ...prev,
    //                     {
    //                         ...data,
    //                         quantity: 1
    //                     }
    //                 ]
    //             }
    //         })
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    async function getProduct(id) {
        try {
            const res = await fetch(
                `https://dummyjson.com/products/${id}`
            );

            const data = await res.json();

            setProduct(prev => {
                const existingProduct = prev.find(p => p.id === data.id);

                if (existingProduct) {
                    return prev.map(p =>
                        p.id === data.id
                            ? {
                                ...p,
                                quantity: p.quantity + 1,
                            }
                            : p
                    );
                }

                return [
                    ...prev,
                    {
                        ...data,
                        quantity: 1
                    }
                ];
            });

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleAddToCart = useCallback((e) => {
        const id = e.currentTarget.id;

        // console.log("Product ID:", id);

        getProduct(id);
    }, [getProduct]);

    // console.log("Parent render")
    const total = product.reduce((total, curr) => total + curr.price * curr.quantity, 0)

    return (
        <>
            <h1>Name: {name}</h1>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
            <h1>Added To Cart</h1>

            {product.map((prod) => (
                <div key={prod.id}>
                    <p>{prod.title}</p>
                    <p>${prod.price}</p>
                    <p>Quantity: {prod.quantity}</p>
                </div>
            ))}

            <hr />

            <h1>{total} - Total Amount to Pay</h1>

            <hr />

            <h1>Products</h1>

            <ProductCard
                products={products}
                handleAddToCart={handleAddToCart}
            />
        </>
    );
}

export default App;
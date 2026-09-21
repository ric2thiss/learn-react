import { useMemo } from "react";
import { useCart } from "../../hooks/useCart";
import "./Cart.css";

function Cart() {
    const { cart, handleIncrementAndDecrementOfCartQuantity } = useCart();

    const total = useMemo(()=> cart.reduce(
        (sum, product) => sum + product.price * product.quantity,0),[cart])
    return (
        <div className="cart-container">

            <div className="cart-header">
                <h1>Shopping Cart</h1>
                <span>{cart.length} items</span>
            </div>

            {cart.length === 0 ? (

                <div className="empty-cart">
                    <div className="empty-cart-icon">🛒</div>
                    <h2>Your cart is empty</h2>
                    <p>Add some products to your cart to get started.</p>
                </div>

            ) : (

                <div className="cart-content">

                    <div className="cart-items">

                        {cart.map(product => (

                            <div
                                className="cart-item"
                                key={product.id}
                            >

                                <img
                                    className="cart-item-image"
                                    src={product.thumbnail}
                                    alt={product.title}
                                />

                                <div className="cart-item-info">

                                    <h2>{product.title}</h2>

                                    <p className="cart-item-price">
                                        ${product.price.toFixed(2)}
                                    </p>

                                    <div className="quantity">
                                        <button onClick={()=> handleIncrementAndDecrementOfCartQuantity(product.id, "decrement")}>-</button>

                                        <span>
                                            {product.quantity}
                                        </span>

                                        <button onClick={()=> handleIncrementAndDecrementOfCartQuantity(product.id, "increment")}>+</button>
                                    </div>

                                </div>

                                <div className="cart-item-total">
                                    ${(product.price * product.quantity).toFixed(2)}
                                </div>

                            </div>

                        ))}

                    </div>

                    <div className="cart-summary">

                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-total">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <input type="submit" className={`checkout-btn ${total===0 ? 'disabled':''}`} disabled={total===0} value="Proceed to Checkout" />

                    </div>

                </div>

            )}

        </div>
    );
}

export default Cart;
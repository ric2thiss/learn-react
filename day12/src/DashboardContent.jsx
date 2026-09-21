import React from "react";
import { useProduct } from "./useProduct";
import "./Dashboard.css";

function DashboardContent() {
    const { products, cartItems } = useProduct();

    const totalCartItems = cartItems.reduce(
        (total, product) => total + product.quantity,
        0
    );

    const totalCartValue = cartItems.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );

    return (
        <div className="dashboard-content">

            {/* Recent Cart */}
            <div className="dashboard-card">

                <div className="card-header">
                    <h2>Recent Cart Items</h2>
                </div>

                {cartItems.length === 0 ? (
                    <p className="empty-message">
                        Your cart is empty.
                    </p>
                ) : (
                    <div className="cart-list">

                        {cartItems.slice(0, 5).map((product) => (
                            <div
                                className="cart-item"
                                key={product.id}
                            >
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                />

                                <div className="cart-item-info">
                                    <h3>{product.title}</h3>

                                    <p>
                                        Quantity: {product.quantity}
                                    </p>
                                </div>

                                <strong>
                                    $
                                    {(
                                        product.price *
                                        product.quantity
                                    ).toFixed(2)}
                                </strong>
                            </div>
                        ))}

                    </div>
                )}

            </div>

            {/* Store Information */}
            <div className="dashboard-card">

                <div className="card-header">
                    <h2>Store Information</h2>
                </div>

                <div className="store-info">

                    <div>
                        <span>Products Available</span>
                        <strong>{products.length}</strong>
                    </div>

                    <div>
                        <span>Unique Products in Cart</span>
                        <strong>{cartItems.length}</strong>
                    </div>

                    <div>
                        <span>Total Quantity</span>
                        <strong>{totalCartItems}</strong>
                    </div>

                    <div>
                        <span>Total Cart Value</span>
                        <strong>
                            ${totalCartValue.toFixed(2)}
                        </strong>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default DashboardContent;
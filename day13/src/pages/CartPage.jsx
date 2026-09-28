import React from 'react';
import { useCarts } from "../hooks/useCarts";

function CartPage() {
  const { cart, handleAddQuantity, handleDecrementQuantity } = useCarts();

  // Basic calculation for total price (assumes your product object has a price property)
  const totalPrice = cart.reduce((total, prod) => total + (prod.price*prod.quantity || 0), 0);

  return (
    <div style={{
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "sans-serif"
    }}>
      {/* Page Header */}
      <h1 style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "2px",
        marginBottom: "2rem",
        borderBottom: "2px solid #f0f0f0",
        paddingBottom: "1rem"
      }}>
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p style={{ color: "#666", textAlign: "center", marginTop: "3rem" }}>
          Your cart is currently empty.
        </p>
      ) : (
        /* Cart Layout Wrapper */
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "flex-start"
        }}>
          
          {/* Products List Section */}
          <div style={{ flex: "1 1 600px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {cart.map((prod) => (
              <article 
                key={prod.id} 
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  backgroundColor: "#fff"
                }}
              >
                {/* Product Info (Left) */}
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  {prod.thumbnail && (
                    <img 
                      src={prod.thumbnail} 
                      alt={prod.title} 
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        backgroundColor: "#f9f9f9"
                      }}
                    />
                  )}
                  <div>
                    <h3 style={{ margin: "0 0 0.25rem 0", fontSize: "1.1rem" }}>{prod.title}</h3>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#666", textTransform: "uppercase" }}>
                      {prod.category}
                    </p>
                  </div>
                </div>

                {/* Static Quantity Selector (Center) */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  overflow: "hidden",
                  backgroundColor: "#fafafa"
                }}>
                  <button 
                    type="button"
                    onClick={()=> handleDecrementQuantity(prod.id)}
                    style={{
                      padding: "0.5rem 0.75rem",
                      border: "none",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "1rem"
                    }}
                  >
                    -
                  </button>
                  <span style={{
                    padding: "0 0.75rem",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    minWidth: "20px",
                    textAlign: "center"
                  }}>
                    {prod.quantity}
                  </span>
                  <button 
                    type="button"
                    onClick={()=> handleAddQuantity(prod.id)}
                    style={{
                      padding: "0.5rem 0.75rem",
                      border: "none",
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "1rem"
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Product Pricing (Right) */}
                <div style={{ textAlign: "right" }}>
                  <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.1rem" }}>
                    ${prod.price*prod.quantity}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Cart Summary Section */}
          <aside style={{
            flex: "0 0 350px",
            padding: "1.5rem",
            border: "1px solid #e0e0e0",
            backgroundColor: "#fafafa",
            position: "sticky",
            top: "20px"
          }}>
            <h2 style={{ margin: "0 0 1.5rem 0", fontSize: "1.3rem", textTransform: "uppercase" }}>
              Order Summary
            </h2>
            
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
              color: "#555"
            }}>
              <span>Total Items:</span>
              <span>{cart.length}</span>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderTop: "1px solid #e0e0e0",
              paddingTop: "1rem",
              marginBottom: "1.5rem"
            }}>
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button style={{
              width: "100%",
              padding: "1rem",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
              cursor: "pointer"
            }}>
              Proceed to Checkout
            </button>
          </aside>

        </div>
      )}
    </div>
  );
}

export default CartPage;

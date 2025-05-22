import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: 20 }}>Your Cart</h2>
      <div style={{ maxWidth: 600, margin: "20px auto" }}>
        {cartItems.length === 0 ? (
          <p style={{ textAlign: "center" }}>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: 10,
                marginBottom: 10,
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "white",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 80, borderRadius: 5 }}
              />
              <div style={{ flexGrow: 1 }}>
                <h4 style={{ margin: 0 }}>{item.name}</h4>
                <p style={{ margin: 0 }}>₹{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#ff3f6c",
                  color: "white",
                  border: "none",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

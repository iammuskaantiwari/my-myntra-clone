import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import productData from "../data/product.json";

export default function HomePage({ searchTerm = "" }) {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-container">
      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center", width: "100%" }}>No products found.</p>
      ) : (
        filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
}

import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ searchTerm, setSearchTerm }) {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png"
          alt="Myntra Logo"
          className="logo-image"
        />
      </div>

      <div className="nav-items">
        <div className="nav-item">
          MEN
          <div className="dropdown">
            <div className="dropdown-column">
              <h4>Topwear</h4>
              <p>T-Shirts</p>
              <p>Shirts</p>
              <p>Jackets</p>
            </div>
            <div className="dropdown-column">
              <h4>Bottomwear</h4>
              <p>Jeans</p>
              <p>Trousers</p>
              <p>Shorts</p>
            </div>
            <div className="dropdown-column">
              <h4>Footwear</h4>
              <p>Shoes</p>
              <p>Sneakers</p>
              <p>Socks</p>
            </div>
          </div>
        </div>

        <div className="nav-item">
          WOMEN
          <div className="dropdown">
            <div className="dropdown-column">
              <h4>Indian Wear</h4>
              <p>Kurtas</p>
              <p>Sarees</p>
              <p>Lehengas</p>
            </div>
            <div className="dropdown-column">
              <h4>Western Wear</h4>
              <p>Tops</p>
              <p>Jeans</p>
              <p>Dresses</p>
            </div>
          </div>
        </div>

        <div className="nav-item">KIDS</div>
        <div className="nav-item">HOME</div>
        <div className="nav-item">BEAUTY</div>
      </div>

      <input
        type="text"
        className="search-bar-navbar"
        placeholder="Search for products, brands and more"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => navigate("/profile")}>
          Profile
        </button>
        <button className="nav-btn" onClick={() => navigate("/wishlist")}>
          Wishlist
        </button>
        <button className="nav-btn bag-btn" onClick={() => navigate("/cart")}>
          Bag
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </button>
      </div>
    </div>
  );
}

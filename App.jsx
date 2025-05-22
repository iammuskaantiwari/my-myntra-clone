import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/homepage";
import CartPage from "./pages/cartpage";
import Navbar from "./components/navbar"; 
import { CartProvider } from "./context/CartContext";
import './index.css';

function PrivateRoute({ element: Element, searchTerm, setSearchTerm }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Element searchTerm={searchTerm} />
    </>
  );
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route
            path="/home"
            element={
              <PrivateRoute
                element={HomePage}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRoute
                element={CartPage}
              />
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

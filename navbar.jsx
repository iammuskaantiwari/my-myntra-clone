import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/cart">Cart</Link>
      <button
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </nav>
  );
}

import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-container">
        <img
          src="/images/FlameandForkLogo.png"
          alt="Flame & Fork Logo"
          className="logo-img"
        />

        <div className="logo-text">
          <h2>Flame & Fork</h2>
          <span>Premium Dining</span>
        </div>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="reserve-btn">
        Reserve Table
      </button>

    </nav>
  );
}

export default Navbar;
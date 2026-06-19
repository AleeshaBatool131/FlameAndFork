import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Desktop & Mobile Navigation */}
      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>

        {/* Mobile Reserve Button */}
        <li className="mobile-reserve">
          <button className="reserve-btn">
            Reserve Table
          </button>
        </li>
      </ul>

      {/* Desktop Button */}
      <button className="reserve-btn desktop-btn">
        Reserve Table
      </button>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;
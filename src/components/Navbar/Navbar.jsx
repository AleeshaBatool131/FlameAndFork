import "./Navbar.css";

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
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="reserve-btn">
        Reserve Table
      </button>

    </nav>
  );
}

export default Navbar;
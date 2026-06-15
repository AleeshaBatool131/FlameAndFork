import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="tag">
          Premium Restaurant Experience
        </span>

        <h1>
          Experience Fine Dining Like Never Before
        </h1>

        <p>
          Fresh ingredients, exceptional flavors,
          and unforgettable dining moments.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Menu
          </button>

          <button className="secondary-btn">
            Book Table
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
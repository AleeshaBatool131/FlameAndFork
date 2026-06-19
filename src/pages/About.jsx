import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import team from "../data/team";

import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-hero">
        <h1>About Flame & Fork</h1>
        <p>
          Delivering unforgettable dining experiences
          through exceptional food and hospitality.
        </p>
      </section>

      <section className="about-intro">

        <div className="about-image">
          <img
            src="/images/about/restaurant.png"
            alt="Restaurant"
          />
        </div>

        <div className="about-content">
          <h2>Our Story</h2>

          <p>
            Flame & Fork was founded with a simple
            vision: to bring people together through
            outstanding food and memorable moments.

            For over 15 years, we have combined
            premium ingredients, expert culinary
            craftsmanship, and warm hospitality to
            create a truly exceptional dining
            experience.
          </p>
        </div>

      </section>

      <section className="mission-vision">

        <div className="box">
          <h2>Our Mission</h2>

          <p>
            To provide premium dining experiences
            that exceed customer expectations
            through quality food and exceptional
            service.
          </p>
        </div>

        <div className="box">
          <h2>Our Vision</h2>

          <p>
            To become the most trusted and admired
            restaurant destination known for
            innovation, quality, and hospitality.
          </p>
        </div>

      </section>

      <section className="statistics">

        <h2>Our Achievements</h2>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>15+</h3>
            <p>Years of Service</p>
          </div>

          <div className="stat-card">
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>

          <div className="stat-card">
            <h3>120+</h3>
            <p>Menu Items</p>
          </div>

          <div className="stat-card">
            <h3>25+</h3>
            <p>Expert Staff</p>
          </div>

        </div>

      </section>

      <section className="team">

        <h2>Meet Our Team</h2>

        <div className="team-grid">

          {team.map((member) => (
            <div
              className="team-card"
              key={member.id}
            >
              <img
                src={member.image}
                alt={member.name}
              />

              <h3>{member.name}</h3>

              <p>{member.role}</p>
            </div>
          ))}

        </div>

      </section>

      <section className="gallery">

        <h2>Restaurant Gallery</h2>

        <div className="gallery-grid">

          <img
            src="/images/about/gallery1.png"
            alt=""
          />

          <img
            src="/images/about/gallery2.png"
            alt=""
          />

          <img
            src="/images/about/gallery3.png"
            alt=""
          />

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;
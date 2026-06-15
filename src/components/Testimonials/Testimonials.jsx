import "./Testimonials.css";
import testimonials from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>Customer Testimonials</h2>

      <div className="testimonial-grid">

        {testimonials.map((item)=>(
          <div className="testimonial-card" key={item.id}>

            <p>
              "{item.review}"
            </p>

            <h4>
              {item.name}
            </h4>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;
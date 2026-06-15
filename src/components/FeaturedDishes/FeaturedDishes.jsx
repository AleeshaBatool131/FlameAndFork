import "./FeaturedDishes.css";
import dishes from "../../data/dishes";

function FeaturedDishes() {
  return (
    <section className="featured">

      <h2>Featured Dishes</h2>

      <div className="dish-grid">

        {dishes.map((dish) => (
          <div className="dish-card" key={dish.id}>

            <img
              src={dish.image}
              alt={dish.name}
            />

            <h3>{dish.name}</h3>

            <p>{dish.price}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeaturedDishes;
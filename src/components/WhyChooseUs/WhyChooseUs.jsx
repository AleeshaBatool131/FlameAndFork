import "./WhyChooseUs.css";

import {
  FaLeaf,
  FaAward,
  FaTruck,
  FaUtensils
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Fresh Ingredients"
    },
    {
      icon: <FaUtensils />,
      title: "Expert Chefs"
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery"
    },
    {
      icon: <FaAward />,
      title: "Premium Quality"
    }
  ];

  return (
    <section className="why">

      <h2>Why Choose Us</h2>

      <div className="feature-grid">

        {features.map((feature,index)=>(
          <div className="feature-card" key={index}>
            {feature.icon}
            <h3>{feature.title}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;
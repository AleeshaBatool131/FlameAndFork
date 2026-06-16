import "./MenuCard.css";

function MenuCard({ item }) {
  return (
    <div className="menu-card">

      <img
        src={item.image}
        alt={item.name}
      />

      <div className="menu-content">

        <span className="category">
          {item.category}
        </span>

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <h4>{item.price}</h4>

      </div>

    </div>
  );
}

export default MenuCard;
import { useState } from "react";
import MenuCard from "../components/MenuCard/MenuCard";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import menuItems from "../data/menu";

import "./Menu.css";

function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Burgers",
    "BBQ",
    "Pizza",
    "Drinks",
    "Desserts"
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      category === "All" ||
      item.category === category;

    const matchesSearch =
      item.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <section className="menu-page">

        <h1>Our Menu</h1>

        <p>
          Discover our delicious collection of
          premium dishes crafted with passion.
        </p>

        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search-bar"
        />

        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setCategory(cat)
              }
              className={
                category === cat
                  ? "active-filter"
                  : ""
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Menu;
import React from "react";
import DishCard from "./DishCard";

const Menu = ({ data }) => (
  <div>
    {data.menu.map((section) => (
      <section key={section.category}>
        <h2>{section.category}</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {section.items.map((item) => (
            <DishCard key={item.name} item={item} />
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default Menu;

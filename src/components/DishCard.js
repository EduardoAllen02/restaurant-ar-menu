import React, { useState } from "react";
import ARViewer from "./ARViewer";

const DishCard = ({ item }) => {
  const [showAR, setShowAR] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <img src={item.image} alt={item.name} width="150" />
      <h3>{item.name}</h3>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => setShowAR(true)}>Ver en AR</button>
      {showAR && <ARViewer modelPath={item.model} />}
    </div>
  );
};

export default DishCard;

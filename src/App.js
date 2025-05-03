import React, { useEffect, useState } from "react";
import Menu from "./components/Menu";
import "./App.css";
import config from "./config/config.json";

function App() {
  return (
    <div>
      <header style={{ backgroundColor: config.themeColor }}>
        <img src={config.logo} alt="Logo" height="50" />
        <h1>{config.restaurantName}</h1>
      </header>
      <Menu data={config} />
    </div>
  );
}

export default App;

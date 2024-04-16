import React from "react";

const MapItem = () => {
  let foodItems = ["Dal", "Vegetables", "Cereals", "Pulses", "Milk", "GHee"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        {foodItems.map((item) => (
          <li key={item} class="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MapItem;

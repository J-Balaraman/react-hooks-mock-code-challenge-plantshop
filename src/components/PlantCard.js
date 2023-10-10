import React, { useState } from "react";

function PlantCard({ plant }) {
  const { id, name, image, price } = plant;

  const [isInStock, setIsInStock] = useState(true);

  function handleClick() {
    setIsInStock(!isInStock);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleClick}>
        {isInStock ? "In Stock" : "Sold Out"}
      </button>
    </li>
  );
}

export default PlantCard;

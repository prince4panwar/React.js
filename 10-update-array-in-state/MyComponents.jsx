import React, { useState } from "react";

function MyComponents() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ol>
        {foods.map((food, index) => (
          <li onClick={() => handleRemoveFood(index)} key={index}>
            {food}
          </li>
        ))}
      </ol>
      <input type="text" placeholder="Enter food name" id="foodInput" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default MyComponents;

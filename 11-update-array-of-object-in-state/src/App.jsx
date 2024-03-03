import React, { useState } from "react";

function App() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }
  function handleYearChange(e) {
    setCarYear(e.target.value);
  }
  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }
  function handleModelChange(e) {
    setCarModel(e.target.value);
  }
  return (
    <div>
      <h2>List of Cars</h2>
      <ol>
        {cars.map((car, index) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleRemoveCar(index)}
            key={index}
          >
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ol>
      <input type="number" value={carYear} onChange={handleYearChange} /> <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button style={{ cursor: "pointer" }} onClick={handleAddCar}>
        Add Car
      </button>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#dadada");
  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return (
    <div className="color-picker-container">
      <h1 style={{ color: color }}>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>{color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;

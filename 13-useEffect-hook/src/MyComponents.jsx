//useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//              This component re-renders
//              This component mounts
//              This state of a value

//useEffect(function, [dependencies]);

//1. useEffect(() => {})            //Runs after every re-render
//2. useEffect(() => {}, [])        //Runs only on mount
//3. useEffect(() => {}. [value])   //Runs on mount + when value changes

import React, { useState, useEffect } from "react";

function MyComponents() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function deleteCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <>
      <p style={{ color: color }}>Look at title</p>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={deleteCount}>Remove</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponents;

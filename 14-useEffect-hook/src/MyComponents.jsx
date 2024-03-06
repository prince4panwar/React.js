//useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//              This component re-renders
//              This component mounts
//              This state of a value

//useEffect(function, [dependencies]);

//1. useEffect(() => {})            //Runs after every re-render
//2. useEffect(() => {}, [])        //Runs only on mount
//3. useEffect(() => {}. [value])   //Runs on mount + when value changes

import React, { useEffect, useState } from "react";

function MyComponents() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener removed");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>window width: {width}px</p>
      <p>window height: {height}px</p>
    </>
  );
}

export default MyComponents;

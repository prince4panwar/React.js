import React from "react";

function Button() {
  const handlClick = (e) => (e.target.textContent = "OHO! 😠");
  return <button onClick={(e) => handlClick(e)}>Don't Click me 🙂</button>;
}

export default Button;

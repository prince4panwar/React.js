// props = real-only properties that are shared between components
// A parent component can send data to a child component.
// <Component key=value />
import React from "react";
import Student from "../Student";

function App() {
  return (
    <>
      <Student name="James Anderson" age={20} isStudent={true} />
      <Student name="Stive Smith" age={42} isStudent={false} />
      <Student name="Glenn Maxwell" age={50} isStudent={false} />
      <Student name="Jos Buttler" age={30} isStudent={true} />
      <Student />
    </>
  );
}

export default App;

import React from "react";
import UserGreetings from "./UserGreetings";

function App() {
  return (
    <>
      <UserGreetings isLoggedIn={false} username="Bro" />
    </>
  );
}

export default App;

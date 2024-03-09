//useContext() = React Hook that allows you to share values
//                between multiple levels of compoents
//                without passing props through each level

//Steps to use useContext Hook

//--- PROVIDER COMPONENT
//1. import {createContext} from 'react';
//2. export const MyContext = createContext();
//3. <MyContext.Provider value={value}>
//        <Child />
//   </MyContext.Provider>

//--- CONSUMER COMPONENTS
//1. import React, {useContext } from 'react';
//   import {MyContext } from './ComponentA';
//2. const value = useContext(MyContext);

import React from "react";
import ComponentA from "./ComponentA";

function App() {
  return (
    // <div className="box">
    <ComponentA />
    // </div>
  );
}

export default App;

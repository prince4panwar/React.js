# React Props

This repository provides a simple explanation of React props and how to use them effectively in your React applications.

## What are Props?

Props (short for properties) are a mechanism for passing data from parent to child components in React. They are read-only and help make your components reusable and customizable.

## Using Props

1. **Passing Props**: Props are passed from parent components to child components as attributes.
   ```jsx
   // ParentComponent.js
   import ChildComponent from './ChildComponent';

   function ParentComponent() {
     return <ChildComponent name="John" age={30} />;
   }

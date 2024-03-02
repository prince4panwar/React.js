# Updating Array in State of React Component

In React, when you have an array in the component's state and you want to update it, you need to follow a specific approach to ensure immutability and trigger re-renders properly. This guide will walk you through the recommended way to update an array in the state of a React component.

## Prerequisites

Make sure you have basic knowledge of React and understand how state works in React components.

## Updating Array in State

### 1. Never mutate the state directly

Directly mutating the state can lead to unexpected behavior and does not trigger re-renders in React components. Always treat state as immutable.

### 2. Use setState() with a callback function

To update an array in the state, use the `setState()` method with a callback function. This ensures that you're working with the latest state and maintains immutability.

Example:

```jsx
this.setState(prevState => ({
  myArray: [...prevState.myArray, newValue]
}));

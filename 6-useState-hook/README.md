# React useState Hook

## Introduction

`useState` is a React Hook that allows functional components to manage state. It lets you add state variables to functional components and update them, replacing the need for class-based components when it comes to managing component-level state.

## How to Use

### Basic Usage

```javascript
import React, { useState } from 'react';

const ExampleComponent = () => {
  // Syntax: useState(initialState)
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExampleComponent;

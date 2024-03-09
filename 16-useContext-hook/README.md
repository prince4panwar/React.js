# React useContext Hook

The `useContext` hook in React.js allows components to consume context values (data) without needing to explicitly pass props through every level of the component tree.

## How it works

1. **Create a Context:** First, you need to create a context using the `React.createContext()` function. This context will hold the data you want to share across your component tree.

2. **Provide the Context:** Use the `Context.Provider` component to wrap the parent component that will provide the context data. The `value` prop of the `Context.Provider` component is where you specify the data you want to share.

3. **Consume the Context:** Components that need access to the context data can use the `useContext` hook. This hook takes the context object (created in step 1) as an argument and returns the current context value.

## Example

```jsx
// Step 1: Create a Context
import React from 'react';
const ThemeContext = React.createContext('light');

// Step 2: Provide the Context
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// Step 3: Consume the Context
function Toolbar() {
  const theme = React.useContext(ThemeContext);
  return (
    <div>
      <button style={{ background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
        {theme === 'dark' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}

export default App;

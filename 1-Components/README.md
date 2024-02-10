# React Components

This repository contains a collection of reusable React components for building modern web applications.

## Components Included

1. **Button**: A customizable button component with various styles and configurations.
2. **Navbar**: A navigation bar component for creating responsive navigation menus.
3. **Card**: A flexible card component for displaying content in a visually appealing manner.
4. **Modal**: A modal component for displaying overlay content or dialog boxes.
5. **Form**: A collection of form components including inputs, selects, and textareas.

## Getting Started

To use these components in your project, simply copy the desired component files into your React application and import them as needed.

```jsx
import { Button, Navbar, Card } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Card title="Welcome!" content="Lorem ipsum dolor sit amet..." />
      <Button label="Click Me" onClick={() => console.log("Button clicked")} />
    </div>
  );
}

export default App;

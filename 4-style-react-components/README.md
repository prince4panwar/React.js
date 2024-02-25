# Styling in React.js

Styling in React.js is an essential aspect of building attractive and functional user interfaces. There are several approaches you can take to style your React components, each with its own advantages and use cases. This guide will cover some of the most popular methods for styling React components.

## 1. CSS Stylesheets

Traditional CSS stylesheets can be used with React applications just like any other web application. You can link external CSS files or include styles directly in your components.

### Pros:
- Familiar syntax for web developers.
- Separation of concerns: Styles are kept separate from component logic.

### Cons:
- Global scope can lead to naming conflicts.
- Harder to maintain in larger applications.

## 2. Inline Styles

React allows you to define styles directly within your components using JavaScript objects.

```jsx
const style = {
  backgroundColor: 'lightblue',
  padding: '10px',
  borderRadius: '5px'
};

const MyComponent = () => {
  return (
    <div style={style}>
      Hello, World!
    </div>
  );
};

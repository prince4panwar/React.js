# Understanding the onChange Event Handler in React.js

In React.js, the `onChange` event handler is commonly used to capture changes in the value of form elements like input fields, select boxes, and text areas. It allows developers to execute a function whenever the value of the input element changes.

## How `onChange` Works

When a user interacts with an input field, such as typing into a text input or selecting an option from a dropdown, React.js triggers the `onChange` event. This event handler calls a specified function, passing an event object containing information about the change.

### Example:

Let's say you have an input field for capturing a user's name:

```jsx
import React, { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleNameChange}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default NameInput;

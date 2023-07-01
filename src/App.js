import React from 'react';
import './style.css';

export default function App() {
  const reverseObject = (obj) => {
    const reversedObj = {};

    for (const key in obj) {
      const value = obj[key];
      reversedObj[value] = key;
    }

    return reversedObj;
  };

  const originalObj = { a: 1, b: 2, c: 3 };
  const reversedObj = reverseObject(originalObj);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Original Object: {JSON.stringify(originalObj)}</p>
      <p>Reversed Object: {JSON.stringify(reversedObj)}</p>
    </div>
  );
}

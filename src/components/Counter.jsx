import React from 'react';
import { useState } from 'react';

export const Counter = () => {

  
  const [count, setCount] = useState(0);
  console.log('Counter rendered with count:', count);

  const handleClick = () => {
    setCount(count + 1);

  };

  return <button onClick={handleClick}>Count: {count}</button>;
};


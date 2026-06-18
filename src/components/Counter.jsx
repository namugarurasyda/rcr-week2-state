import React from 'react';
import { useState } from 'react';

export const Counter = () => {

  
    // const [currentValue, setterFunction]  = useState(0)


  const [count, setCount] = useState(0);
  console.log('Counter rendered with count:', count);

  const handleClick = () => {
    setCount(count + 1);

  };

  const handleClickminus = () => {
    setCount(count - 1);

  };

  return (
    <div>
      <button onClick={handleClick}>+</button>
      <span>Count: {count}</span>
      <button onClick={handleClickminus}>-</button>
    </div>
  );
};


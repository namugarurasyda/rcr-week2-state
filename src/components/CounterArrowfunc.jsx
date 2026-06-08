import React from 'react';
import { useState } from 'react';

export const CounterArrowfunc = () => {

  //currentValue,setterfunction = useState(initialValue)
  const [count, setCount] = useState(() => {
     console.log('Initial State function called');
     return 0;
    });

  const handleClick = () => {
    setCount(count + 1);

  };

  return <button onClick={handleClick}>Count: {count}</button>;
};


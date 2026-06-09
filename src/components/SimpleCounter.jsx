import { useState } from "react";

export const SimpleCounter = () => {
  console.log("SimpleCounter component rendered!");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Before setCount count is:", count);
    setCount(count + 1);
    console.log("After setCount count is:", count); 
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
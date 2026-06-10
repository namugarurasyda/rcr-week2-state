import { useState } from 'react'; // Not being used here!

export const WithoutCounter = () => {
  // 1. Define a regular local variable
  let count = 0;

  // 2. Define the click handler function
  const handleClick = () => {
    count = count + 1; 
    console.log("Count in console:", count); // This will increase (1, 2, 3...)
  };

  // 3. Render the UI
  return (
    <button onClick={handleClick}>
      Count: {count}  {/* This will stay stuck at 0 */}
    </button>
  );
};

export default WithoutCounter ;
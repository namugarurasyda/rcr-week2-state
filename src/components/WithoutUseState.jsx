import { useState } from 'react'; // Not being used here!

export const WithoutCounter = () => {

    const [count, setCount] = useState(0);


  // 2. Define the click handler function
  const handleClick = () => {
       setCount(count + 1); // This will update the state, but the component won't re-render to reflect the change
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
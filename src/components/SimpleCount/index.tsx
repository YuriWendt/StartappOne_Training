import React, { useState } from 'react';

function SimpleCount() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    
    setCount(count + 1);
    // Your code should be here
  }

  return (
    <div>
        <p>
          Count is: {count}
        </p>
        <button onClick={incrementCount}>Click here to count</button>
    </div>
  );
}

export default SimpleCount;

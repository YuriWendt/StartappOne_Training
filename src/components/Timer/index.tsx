import React, { useState } from 'react';
import { useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  // Your code should be here
useEffect (() => {

  const intervalId = setInterval(() => {
    setTime(time + 1);
  }, 1000);

  return () => clearInterval(intervalId);
}, [time]);

  return (
    <div>
        <p>
          Time elapsed: {time}s
        </p>
    </div>
  );
}

export default Timer;

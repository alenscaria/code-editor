import React, { useState, useEffect } from 'react';

function SystemTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <span className="text-gray-500 text-sm">
      {time.toLocaleTimeString()}
    </span>
  );
}

export default SystemTime;

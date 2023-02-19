import React, { useEffect, useState } from "react";

import './Timer.css';

const Timer = (props) => {
  const [timer, setTimer] = useState(props.time);

  useEffect(() => {
    const interval = setInterval(() => setTimer(timer - 1), 1000);
    if (timer === 0) {
      clearInterval(interval);
      console.log("YIPEEE!")
    }
    return () => clearInterval(interval);
  }, [timer]);

  return <h2 className="timer">{timer}</h2>;
};

export default Timer;

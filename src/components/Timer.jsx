import React, { useState, useEffect } from "react";
import "./Timer.css";

export default function Timer(props) {
  const [time, setTime] = useState(0);

  const handleClick = () => {
    props.setShowTimer(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer" style={props.timerStyle}>
      <h1>{time}</h1>
      <button onClick={handleClick}>stop</button>
    </div>
  );
}

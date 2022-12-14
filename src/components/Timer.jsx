import React, { useEffect } from "react";
import "./Timer.css";

export default function Timer(props) {
  useEffect(() => {
    const interval = setInterval(() => {
      props.setTime((prevTime) => prevTime + 1);
    }, 10);

    return () => clearInterval(interval);
  }, [props]);

  return (
    <div className="timer">
      <p>{props.time / 100}</p>
    </div>
  );
}

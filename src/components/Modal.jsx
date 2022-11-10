import React, { useEffect, useState } from "react";
import "./Modal.css";

export default function Modal(props) {
  const [userTime, setUserTime] = useState(null);

  const handleClick = () => {
    props.setSelectedCharacters([]);
    props.setIsStarted(false);
    props.setTime(0);
  };
  useEffect(() => {
    setUserTime(props.time);
    props.setStartTimer(false);
  }, []);
  return (
    <div className="modal">
      <div className="modal__container">
        <h1>You WIN! Your time was: {userTime / 100} seconds</h1>
        <button onClick={handleClick}>Play again</button>
      </div>
    </div>
  );
}

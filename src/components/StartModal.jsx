import React, { useEffect } from "react";
import "./StartModal.css";

export default function StartModal({ isStarted, setIsStarted, setStartTimer }) {
  const handleClick = () => {
    setIsStarted(!isStarted);
    setStartTimer(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="start-modal__background">
      <div className="start-modal">
        <h1 className="start-modal__heading">Welcome to Waldo</h1>
        <button
          className="start-modal__button start-button"
          onClick={handleClick}
        >
          START
        </button>
      </div>
    </div>
  );
}

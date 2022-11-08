import React, { Children } from "react";
import "./Modal.css";

export default function Modal(props) {
  const handleClick = () => {
    props.setSelectedCharacters([]);
  };
  return (
    <div className="modal">
      <div className="modal__container">
        <h1>You Win!</h1>
        <button onClick={handleClick}>Play again</button>
      </div>
    </div>
  );
}

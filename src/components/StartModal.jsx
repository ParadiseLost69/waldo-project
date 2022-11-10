import React, { useEffect } from "react";
import MortySource from "../images/morty-in-space.jpg";
import TinklesSource from "../images/tinkles-pic.jpg";
import PencilSource from "../images/pencilvester.gif";
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
        <div className="start-modal__heading-button--container">
          <h1 className="start-modal__heading heading">
            THE PARASITES HAVE TAKEN OVER!{" "}
            <span>WE NEED YOUR HELP TO KILL THE IMPOSTERS.</span>
          </h1>
          <button
            className="start-modal__button start-button"
            onClick={handleClick}
          >
            START
          </button>
        </div>
        <div className="character-container">
          <div className="character-container__block">
            <img className="character-container__image" src={MortySource} />
            <h3 className="character-container__character-name">Morty</h3>
          </div>
          <div className="character-container__block">
            <img className="character-container__image" src={TinklesSource} />
            <h3 className="character-container__character-name">Tinkles</h3>
          </div>
          <div className="character-container__block">
            <img className="character-container__image" src={PencilSource} />
            <h3 className="character-container__character-name">
              Pencilvester
            </h3>
          </div>
          <h1 className="sub-heading">I'm pretty sure it's these guys.</h1>
        </div>
      </div>
    </div>
  );
}

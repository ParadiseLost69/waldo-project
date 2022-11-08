import React from "react";

import "./Header.css";
import MortySource from "../images/morty-pic.jpeg";
import TinklesSource from "../images/tinkles-pic.webp";
import PencilSource from "../images/pencilvester.gif";

export default function Header(props) {
  // const checkStrike = (name) => {
  //   return props.selectedCharacters.contains(name) ? "line-through" : "none";
  // };

  return (
    <div className="header">
      <h1 className="header__title">
        Shoot Now Look It's Like a Where's Waldo Page
      </h1>
      <h2 className="header__title--secondary">
        Check Out All These ZANY Characters! Can You Find 'Em?
      </h2>
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
          <h3 className="character-container__character-name">Pencilvester</h3>
        </div>
      </div>
    </div>
  );
}

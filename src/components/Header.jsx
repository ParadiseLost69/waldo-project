import React from "react";
import MortySource from "../images/morty-pic.jpeg";
import TinklesSource from "../images/tinkles-pic.jpg";
import PencilSource from "../images/pencilvester.gif";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__characters">
        <div className="header__characters--block">
          <img className="header__characters--image" src={MortySource} />
          <h3 className="header__characters--character-name">Morty</h3>
        </div>
        <div className="header__characters--block">
          <img className="header__characters--image" src={TinklesSource} />
          <h3 className="header__characters--character-name">Tinkles</h3>
        </div>
        <div className="header__characters--block">
          <img className="header__characters--image" src={PencilSource} />
          <h3 className="header__characters--character-name">Pencilvester</h3>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import MortySource from "../images/morty-pic.jpeg";
import TinklesSource from "../images/tinkles-pic.jpg";
import PencilSource from "../images/pencilvester.gif";

import "./Header.css";

export default function Header({ selectedCharacters }) {
  return (
    <div className="header">
      <div className="header__characters">
        <div className="header__characters--block">
          <img
            className="header__characters--image"
            alt="Morty Smith's face looking startled"
            src={MortySource}
          />
          <h3
            className="header__characters--character-name"
            style={
              selectedCharacters.includes("Morty")
                ? { textDecoration: "line-through", textDecorationColor: "red" }
                : { textDecoration: "none" }
            }
          >
            Morty
          </h3>
        </div>
        <div className="header__characters--block">
          <img
            className="header__characters--image"
            alt="Tinkles the unicorn sheep dancing"
            src={TinklesSource}
          />
          <h3
            className="header__characters--character-name"
            style={
              selectedCharacters.includes("Tinkles")
                ? { textDecoration: "line-through", textDecorationColor: "red" }
                : { textDecoration: "none" }
            }
          >
            Tinkles
          </h3>
        </div>
        <div className="header__characters--block">
          <img
            className="header__characters--image"
            alt="Pencilvester dancing"
            src={PencilSource}
          />
          <h3
            className="header__characters--character-name"
            style={
              selectedCharacters.includes("Pencilvester")
                ? { textDecoration: "line-through", textDecorationColor: "red" }
                : { textDecoration: "none" }
            }
          >
            Pencilvester
          </h3>
        </div>
      </div>
    </div>
  );
}

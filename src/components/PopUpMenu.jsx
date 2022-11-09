import React, { useState } from "react";
import MortySource from "../images/morty-pic.jpeg";
import PencilSource from "../images/pencilvester.gif";
import TinklesSource from "../images/tinkles-pic.webp";
import "./PopUpMenu.css";

export default function PopUpMenu(props) {
  const verified = (character) => props.selectedCharacters.includes(character);

  return (
    <div className="popup-menu" style={props.style}>
      <ul className="popup-menu__list">
        <li
          name="Morty"
          onClick={(e) => {
            props.menuItemClick(e);
          }}
          className={`popup-menu__list--item top-item ${
            verified("Morty") ? "verified" : "unverified"
          }`}
        >
          <img
            name="Morty"
            className="popup-menu__list--item--image"
            src={MortySource}
            alt="morty smith from the animated television seriies 'Rick and Morty' looking frightened"
          />
          Morty
        </li>
        <li
          onClick={(e) => props.menuItemClick(e)}
          className={`popup-menu__list--item ${
            verified("Pencilvester") ? "verified" : "unverified"
          }`}
        >
          <img
            name="Pencilvester"
            className="popup-menu__list--item--image"
            src={PencilSource}
            alt="Pencilvester from the animated television series 'Rick and Morty' dancing"
          />
          Pencilvester
        </li>
        <li
          onClick={(e) => props.menuItemClick(e)}
          className={`popup-menu__list--item bottom-item ${
            verified("Tinkles") ? "verified" : "unverified"
          }`}
        >
          <img
            name="Tinkles"
            className="popup-menu__list--item--image"
            src={TinklesSource}
            alt="Tinkles from the animated television series 'Rick and Morty' dancing"
          />
          Tinkles
        </li>
      </ul>
    </div>
  );
}

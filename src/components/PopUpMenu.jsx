import React, { useState } from "react";
import "./PopUpMenu.css";

export default function PopUpMenu(props) {
  const verified = (character) => props.selectedCharacters.includes(character);

  return (
    <div className="popup-menu" style={props.style}>
      <ul className="popup-menu__list">
        <li
          onClick={(e) => {
            props.menuItemClick(e);
          }}
          className={`popup-menu__list--item top-item ${
            verified("Morty") ? "verified" : "unverified"
          }`}
        >
          Morty
        </li>
        <li
          onClick={(e) => props.menuItemClick(e)}
          className={`popup-menu__list--item ${
            verified("Pencilvester") ? "verified" : "unverified"
          }`}
        >
          Pencilvester
        </li>
        <li
          onClick={(e) => props.menuItemClick(e)}
          className={`popup-menu__list--item bottom-item ${
            verified("Tinklesgit") ? "verified" : "unverified"
          }`}
        >
          Tinkles
        </li>
      </ul>
    </div>
  );
}

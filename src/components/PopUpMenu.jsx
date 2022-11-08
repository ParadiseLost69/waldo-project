import React from "react";
import "./PopUpMenu.css";

export default function PopUpMenu(props) {
  return (
    <div className="popup-menu" style={props.style}>
      <ul className="popup-menu__list">
        <li
          onClick={(e) => props.menuItemClick(e)}
          className="popup-menu__list--item top-item"
        >
          Morty
        </li>
        <li
          onClick={(e) => props.menuItemClick(e)}
          className="popup-menu__list--item"
        >
          Pencilvester
        </li>
        <li
          onClick={(e) => props.menuItemClick(e)}
          className="popup-menu__list--item bottom-item"
        >
          Tinkles
        </li>
      </ul>
    </div>
  );
}

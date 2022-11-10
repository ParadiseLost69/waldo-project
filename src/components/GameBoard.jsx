import React, { useEffect, useState } from "react";
import "./GameBoard.css";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import Header from "./Header";
import Modal from "./Modal";
import PopUpMenu from "./PopUpMenu";

export default function GameBoard(props) {
  const [imageURL, setImageURL] = useState(null);
  const [charLocation, setCharLocation] = useState([
    { name: "Morty", XLow: 50, XHigh: 56, YLow: 32, YHigh: 57 },
    { name: "Tinkles", XLow: 64, XHigh: 68, YLow: 72, YHigh: 85 },
    { name: "Pencilvester", XLow: 42, XHigh: 44, YLow: 31, YHigh: 42 },
  ]);

  //refactor so that state changes to unmount and mount items (eg: state"start-page"/ "game-page" / "end-page" )
  const [popUpMenuStyle, setPopUpMenuStyle] = useState({
    position: "absolute",
    display: "none",
    top: 0,
    left: 0,
  });

  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({
    X: null,
    Y: null,
  });

  //download image from firebase storage
  useEffect(() => {
    const imageRef = ref(storage, "images/rick-and-morty-wheres-waldo.webp");
    getDownloadURL(imageRef).then((url) => {
      setImageURL(url);
    });
  }, []);

  //checks to see if characters have already been selected and adds them to array if not.
  function CheckAndAddCharacter(characterName) {
    if (selectedCharacters.length > 0) {
      if (selectedCharacters.includes(characterName)) {
      } else {
        setSelectedCharacters((prev) => [...prev, characterName]);
      }
    } else {
      setSelectedCharacters((prev) => [...prev, characterName]);
    }
  }

  //Brings pop up on Click. (REFACTOR: change true or false state)
  const popUpOnClick = (e, setStyleFunction) => {
    const { pageX, pageY } = e;

    //sets the pop up menu location but if its at the bottom it will display above the cursor
    setStyleFunction((prevStyle) => {
      return prevStyle.display === "none"
        ? {
            ...prevStyle,
            display: "flex",
            top: props.currentLocation.Y > 65 ? pageY - 200 : pageY,

            left: pageX,
          }
        : {
            ...prevStyle,
            display: "none",
            top: pageY,
            left: pageX,
          };
    });
  };

  //
  const handleClick = (e) => {
    const { offsetTop, offsetLeft, width, height } = e.target;

    // Get the exact location of the cursor in percentage
    const positionY = e.pageY - offsetTop;
    const positionX = e.pageX - offsetLeft;
    const pageX = Math.floor((positionX / width) * 100);
    const pageY = Math.floor((positionY / height) * 100);

    setSelectedLocation({ X: pageX, Y: pageY });

    popUpOnClick(e, setPopUpMenuStyle);
  };

  //checks if coordinates are correct and matches the name
  const menuItemClick = (e) => {
    const { textContent, name } = e.target;

    charLocation.map((char) => {
      if (
        (selectedLocation.X >= char.XLow &&
          selectedLocation.X <= char.XHigh &&
          selectedLocation.Y <= char.YHigh &&
          selectedLocation.Y >= char.YLow &&
          char.name === textContent) ||
        (selectedLocation.X >= char.XLow &&
          selectedLocation.X <= char.XHigh &&
          selectedLocation.Y <= char.YHigh &&
          selectedLocation.Y >= char.YLow &&
          char.name === name)
      ) {
        console.log("You got " + char.name);
        CheckAndAddCharacter(char.name);
      }
    });

    setPopUpMenuStyle({ display: "none", position: "absolute" });
  };

  return (
    <>
      <Header selectedCharacters={selectedCharacters} />
      <PopUpMenu
        menuItemClick={menuItemClick}
        style={popUpMenuStyle}
        setStyle={setPopUpMenuStyle}
        popUpOnClick={popUpOnClick}
        selectedCharacters={selectedCharacters}
      />

      {!imageURL && <h1 className="loading">Loading...</h1>}
      {imageURL && (
        <img
          className="gameboard__image"
          src={imageURL}
          onClick={(e) => handleClick(e)}
          onDragStart={(e) => e.preventDefault()}
          onMouseMove={(e) => props.findMouseLocation(e)}
        ></img>
      )}

      {selectedCharacters.length === 3 && (
        <Modal
          setSelectedCharacters={setSelectedCharacters}
          setStartTimer={props.setStartTimer}
          setIsStarted={props.setIsStarted}
          time={props.time}
          setTime={props.setTime}
        />
      )}
    </>
  );
}

import React, { Suspense, useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import Header from "./Header";
import Modal from "./Modal";

import "./GameBoard.css";

export default function GameBoard() {
  const [imageURL, setImageURL] = useState(null);
  const [charLocation, setCharLocation] = useState([
    { name: "Morty", XLow: 50, XHigh: 56, YLow: 32, YHigh: 57 },
    { name: "Tinkles", XLow: 64, XHigh: 68, YLow: 72, YHigh: 85 },
    { name: "Pencilvester", XLow: 42, XHigh: 44, YLow: 31, YHigh: 42 },
  ]);

  const [selectedCharacters, setSelectedCharacters] = useState([]);

  useEffect(() => {
    const imageRef = ref(storage, "images/rick-and-morty-wheres-waldo.webp");
    getDownloadURL(imageRef).then((url) => {
      setImageURL(url);
    });
  }, []);

  function CheckAndAddCharacter(characterName) {
    if (selectedCharacters.length > 0) {
      if (selectedCharacters.includes(characterName)) {
      } else {
        setSelectedCharacters((prev) => [...prev, characterName]);
      }
    } else {
      setSelectedCharacters((prev) => [...prev, characterName]);
    }
    if (selectedCharacters.length === 3) {
      console.log("you win!");
    }
  }

  const handleClick = (e) => {
    console.log(selectedCharacters);
    const { offsetTop, offsetLeft, width, height } = e.target;

    // Get the exact location of the cursor in percentage
    const positionY = e.pageY - offsetTop;
    const positionX = e.pageX - offsetLeft;
    const pageX = Math.floor((positionX / width) * 100);
    const pageY = Math.floor((positionY / height) * 100);

    console.log(pageY);
    //check if the character fits within the bounds of the selection box

    charLocation.map((char) => {
      if (
        pageX >= char.XLow &&
        pageX <= char.XHigh &&
        pageY <= char.YHigh &&
        pageY >= char.YLow
      ) {
        console.log("You got " + char.name);
        CheckAndAddCharacter(char.name);
      }
    });
  };

  return (
    <>
      <Header selectedCharacters={selectedCharacters} />

      {!imageURL && <h1 className="loading">Loading...</h1>}
      {imageURL && (
        <img
          className="gameboard__image"
          src={imageURL}
          onClick={(e) => handleClick(e)}
        ></img>
      )}

      {selectedCharacters.length === 3 && (
        <Modal setSelectedCharacters={setSelectedCharacters} />
      )}
    </>
  );
}

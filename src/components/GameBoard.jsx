import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";

export default function GameBoard() {
  const [imageURL, setImageURL] = useState(null);

  const storageRef = ref(storage);

  useEffect(() => {
    const imageRef = ref(storage, "images/rick-and-morty-wheres-waldo.webp");

    getDownloadURL(imageRef).then((url) => {
      setImageURL(url);
    });
    console.log(imageURL);
  }, []);

  return (
    <div>
      <h1>GameBoard</h1>
      {imageURL && <img src={imageURL}></img>}
    </div>
  );
}

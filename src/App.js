import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  const [targetBox, setTargetBox] = useState({
    position: "absolute",
    display: "none",
    top: 0,
    left: 0,
  });
  const [popUpMenuStyle, setPopUpMenuStyle] = useState({
    position: "absolute",
    top: 0,
    left: 0,
  });

  // const handleClick = (e) => {
  //   const { pageX, pageY } = e;
  //   setTargetBox((prevStyle) => {
  //     return { ...prevStyle, top: pageY - 32, left: pageX - 2 };
  //   });
  // };
  const handleMove = (e) => {
    const { pageX, pageY } = e;
    setTargetBox((prevStyle) => {
      return {
        position: "absolute",
        display: "block",
        top: pageY - 21,
        left: pageX - 20,
      };
    });
  };
  //Issue - cant click through div to select character
  return (
    <main onMouseMove={(e) => handleMove(e)} className="App">
      <div className="target-box" style={targetBox}>
        <div className="vertical-crosshair"></div>
        <div className="horizontal-crosshair"></div>
      </div>
      <GameBoard />
    </main>
  );
}

export default App;

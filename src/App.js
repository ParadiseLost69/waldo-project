import { useEffect, useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import PopUpMenu from "./components/PopUpMenu";
import Timer from "./components/Timer";
function App() {
  const [targetBox, setTargetBox] = useState({
    position: "absolute",
    display: "none",
    top: 0,
    left: 0,
  });
  const [timerStyle, setTimerStyle] = useState({
    position: "fixed",
    top: 50,
    left: 50,
    display: "block",
  });
  const [showTimer, setShowTimer] = useState(true);

  const [currentLocation, setCurrentLocation] = useState({ X: null, Y: null });

  const findMouseLocation = (e) => {
    const { offsetTop, height } = e.target;

    // Get the exact location of the cursor in percentage
    const positionY = e.pageY - offsetTop;
    const pageY = Math.floor((positionY / height) * 100);

    setCurrentLocation({ Y: pageY });
  };

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

  const handleClick = () => {
    setShowTimer(true);
  };
  //Issue - cant click through div to select character
  return (
    <main onMouseMove={(e) => handleMove(e)} className="App">
      <button onClick={handleClick}>show timer</button>
      {showTimer && (
        <Timer
          timerStyle={timerStyle}
          setTimerStyle={setTimerStyle}
          showTimer={showTimer}
          setShowTimer={setShowTimer}
        />
      )}
      <div className="target-box" style={targetBox}>
        <div className="vertical-crosshair"></div>
        <div className="horizontal-crosshair"></div>
      </div>
      <GameBoard
        currentLocation={currentLocation}
        findMouseLocation={findMouseLocation}
      />
    </main>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import StartModal from "./components/StartModal";
import Timer from "./components/Timer";
import useInterval from "./components/logic/useInterval";
function App() {
  const [isStarted, setIsStarted] = useState(false);

  const [targetBox, setTargetBox] = useState({
    position: "absolute",
    display: "none",
    top: 0,
    left: 0,
  });

  //timer state + time
  const [startTimer, setStartTimer] = useState(false);
  const [time, setTime] = useState(0);
  //

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

  return (
    <main onMouseMove={(e) => handleMove(e)} className="App">
      {!isStarted && (
        <StartModal
          setIsStarted={setIsStarted}
          isStarted={isStarted}
          setStartTimer={setStartTimer}
        />
      )}
      <div className="game-board__container">
        {isStarted && (
          <div className="target-box" style={targetBox}>
            <div className="vertical-crosshair"></div>
            <div className="horizontal-crosshair"></div>
          </div>
        )}

        <GameBoard
          currentLocation={currentLocation}
          findMouseLocation={findMouseLocation}
          startTimer={startTimer}
          setStartTimer={setStartTimer}
          setIsStarted={setIsStarted}
          time={time}
          setTime={setTime}
        />
        {startTimer && <Timer setTime={setTime} time={time} />}
      </div>
    </main>
  );
}

export default App;

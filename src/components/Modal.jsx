import React, { useEffect, useState } from "react";
import "./Modal.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function Modal(props) {
  const [userTime, setUserTime] = useState(null);
  const [name, setName] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "records"));
      snapshot.forEach((doc) => {
        setLeaderboard((prevBoard) => {
          return [
            ...prevBoard,
            { name: doc.data().name, time: doc.data().time },
          ];
        });
      });
    };
    fetchData();
  }, []);
  useEffect(() => {
    setUserTime(props.time);
    props.setStartTimer(false);
  }, []);

  const handleClick = () => {
    props.setSelectedCharacters([]);
    props.setIsStarted(false);
    props.setTime(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "records"), {
      name: name,
      time: props.time,
    });
    setName("");
    props.setSelectedCharacters([]);
    props.setIsStarted(false);
    props.setTime(0);
  };

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const sortedLeaderboard =
    leaderboard && leaderboard.sort((a, b) => a.time - b.time);
  const displayLeaderboard = leaderboard.map((item, index) => {
    if (index <= 9) {
      return (
        <div className="leaderboard__item">
          <p className="leaderboard__item--name">
            {index + 1}: {item.name}
          </p>
          <p className="leaderboard__item--time">{item.time / 100} seconds</p>
        </div>
      );
    } else {
      return;
    }
  });

  return (
    <div className="modal">
      <div className="modal__container">
        <h1 className="modal__message--heading">
          Time: {userTime / 100} Seconds!
        </h1>

        <form className="modal__form">
          <label htmlFor="user-name">Enter Your Name and Submit a Score</label>
          <input
            required={true}
            requiredtxt="Please enter a name"
            minLength={4}
            maxLength={10}
            name="user-name"
            id="user-name"
            onChange={(e) => handleChange(e)}
            value={name}
          ></input>
          <button
            type="submit"
            className="modal__container--upload-score--button"
            onClick={(e) => handleSubmit(e)}
          >
            Send Score
          </button>
        </form>
        <div className="leaderboard">
          <h1 className="leaderboard__title">Leaderboard</h1>
          <div className="leaderboard__items">{displayLeaderboard}</div>
        </div>
        <button className="leaderboard__button" onClick={handleClick}>
          Play again
        </button>
      </div>
    </div>
  );
}

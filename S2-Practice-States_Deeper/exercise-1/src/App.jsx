import React from "react";
import { useState } from "react";

export default function App() {

  const [score, setScore] = useState("");

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${score * 10}%`;

    // 2- Compute color (optional)
    let scoreColor;
    if (score <= 3) {
      scoreColor = "#ff4d4d"; 
    } else if (score <= 6) {
      scoreColor = "#f3bc47"; 
    } else {
      scoreColor = "#4caf50";
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };


  function onScoreChange(event) {
    setScore(Math.min(10, Math.max(0,Number(event.target.value))));
  }

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={onScoreChange} ></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}

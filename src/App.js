import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import useSpeedGame from "./hooks/useSpeedGame";
function App() {
  const {
    textAreaRef,
    gameOn,
    text,
    handleChange,
    handleClick,
    timeRemaining,
    countWords,
  } = useSpeedGame();

  return (
    <div className="app">
      <h1>How fast do you type?</h1>
      <textarea
        ref={textAreaRef}
        disabled={!gameOn}
        value={text}
        onChange={handleChange}
      />
      <h4>Time reminaing: {timeRemaining}</h4>
      <button disabled={gameOn} onClick={handleClick}>
        START
      </button>
      <h1>Word count: {countWords}</h1>
    </div>
  );
}

export default App;

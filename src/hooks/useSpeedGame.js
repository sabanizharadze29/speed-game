import { useRef, useState, useEffect } from "react";
function useSpeedGame(params) {
  const STARTING_TIME = 10;
  const textAreaRef = useRef(null);
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [gameOn, setGameOn] = useState(false);
  const [countWords, setCountWords] = useState(0);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const calculateWords = (text) => {
    const wordsArray = text.split(" ").filter((word) => word !== "");
    return wordsArray.length;
  };

  const handleClick = () => {
    setGameOn(true);
    setTimeRemaining(STARTING_TIME);
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();

    setText("");
  };

  useEffect(() => {
    if (gameOn && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((oldTime) => oldTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setGameOn(false);
      let numWords = calculateWords(text);

      setCountWords(numWords);
    }
  }, [timeRemaining, gameOn]);

  return {
    textAreaRef,
    gameOn,
    text,
    handleChange,
    handleClick,
    timeRemaining,
    countWords,
  };
}
export default useSpeedGame;

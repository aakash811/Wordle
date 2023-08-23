import React, { useContext } from "react";
import "./style1.css";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3 className="guess">
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord ? (
        <h3 className="attempts">
          You guessed in {currAttempt.attempt} attempts
        </h3>
      ) : null}
    </div>
  );
}

export default GameOver;

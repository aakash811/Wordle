import React, { useContext } from "react";
import "../App.css";
import { AppContext } from "../App";
import Letter from "./Letter";

function Board() {
  return (
    <div className="board">
      {" "}
      <div className="row">
        <Letter letterPos={0} attemptVal={0} className="tile" />
        <Letter letterPos={1} attemptVal={0} className="tile" />
        <Letter letterPos={2} attemptVal={0} className="tile" />
        <Letter letterPos={3} attemptVal={0} className="tile" />
        <Letter letterPos={4} attemptVal={0} className="tile" />
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={1} className="tile" />
        <Letter letterPos={1} attemptVal={1} className="tile" />
        <Letter letterPos={2} attemptVal={1} className="tile" />
        <Letter letterPos={3} attemptVal={1} className="tile" />
        <Letter letterPos={4} attemptVal={1} className="tile" />
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={2} className="tile" />
        <Letter letterPos={1} attemptVal={2} className="tile" />
        <Letter letterPos={2} attemptVal={2} className="tile" />
        <Letter letterPos={3} attemptVal={2} className="tile" />
        <Letter letterPos={4} attemptVal={2} className="tile" />
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={3} className="tile" />
        <Letter letterPos={1} attemptVal={3} className="tile" />
        <Letter letterPos={2} attemptVal={3} className="tile" />
        <Letter letterPos={3} attemptVal={3} className="tile" />
        <Letter letterPos={4} attemptVal={3} className="tile" />
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={4} className="tile" />
        <Letter letterPos={1} attemptVal={4} className="tile" />
        <Letter letterPos={2} attemptVal={4} className="tile" />
        <Letter letterPos={3} attemptVal={4} className="tile" />
        <Letter letterPos={4} attemptVal={4} className="tile" />
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={5} className="tile" />
        <Letter letterPos={1} attemptVal={5} className="tile" />
        <Letter letterPos={2} attemptVal={5} className="tile" />
        <Letter letterPos={3} attemptVal={5} className="tile" />
        <Letter letterPos={4} attemptVal={5} className="tile" />
      </div>
    </div>
  );
}

export default Board;

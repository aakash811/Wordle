import React, { useState } from "react";
import "./style.css";
import Example from "./Example";
import { FaMoon } from "react-icons/fa6";
import { AiFillQuestionCircle } from "react-icons/ai";

const WordleMain = () => {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <>
      <div className="wrap-1">
        <dialog className="dialog">
          <div className="diag">
            <h2 className="diag-1">How To Play</h2>
            <button className="btn" onClick={() => setIsOpen(false)}>
              x
            </button>
            <h3 className="diag-2">Guess the word in 6 tries.</h3>
            <Example />
          </div>
        </dialog>
      </div>
    </>
  ) : null;
};

export default WordleMain;

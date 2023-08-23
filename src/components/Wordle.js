import React, { useState } from "react";
import "./style.css";
import WordleMain from "./WordleMain";
import Example from "./Example";
import App from "../App";

const Wordle = () => {
  const [screen, setScreen] = useState(<Wordle />);

  return (
    <>
      <div className="wrap-1">
        <div className="wrap-2">
          <div className="wrap-3">
            <div className="wrap-4">
              <img src="https://static01.nyt.com/images/2022/03/02/crosswords/alpha-wordle-icon-new/alpha-wordle-icon-new-square320-v3.png?format=svg&quality=75&auto=webp&enable=upscale"></img>
              <h1 className="title">Wordle</h1>
              <p className="p1">Get 6 chances to guess a 5-letter word</p>
              <div className="btns">
                <button className="btn-howtoplay">How to play</button>
                <button className="btn-play">Play</button>
              </div>
              <p className="cred">Created by Aakash</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wordle;

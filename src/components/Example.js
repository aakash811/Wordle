import React from "react";
import "./style1.css";

const Example = () => {
  return (
    <section className="inst">
      <ul className="inst-list">
        <li>Each guesss must be valid 5-letter word.</li>
        <li>
          The color of the tiles will change to show how close your guess was to
          the word.
        </li>
      </ul>
      <div className="example">
        <p>
          <strong className="title">Examples</strong>
        </p>
        <div aria-label="weary" className="example-1">
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word-correct">W</div>
          </div>
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word">E</div>
          </div>
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word">A</div>
          </div>
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word">R</div>
          </div>
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word">Y</div>
          </div>
          <p>
            <strong>W </strong>
            is in the word and in the correct spot.
          </p>
        </div>

        <div aria-label="pills" className="example-2">
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word">P</div>
          </div>
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word-present">I</div>
          </div>
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word">L</div>
          </div>
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word">L</div>
          </div>
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word">S</div>
          </div>
          <p>
            <strong>I </strong>
            is in the word but in the wrong spot.
          </p>
        </div>

        <div aria-label="Wrong" className="example-3">
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word">W</div>
          </div>
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word">R</div>
          </div>
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word">O</div>
          </div>
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word-absent">N</div>
          </div>
          <div data-testid="weary-letter" className="example-tile">
            <div className="tile-word">G</div>
          </div>
          <p>
            <strong>N </strong>
            is not in the word in any spot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Example;

import { useState } from "react";

import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randNum = generateRandNum(1, 7);
    setCurrentDice((prev) => randNum);

    // Guard clause - early exit if user didn't select a number
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    if (selectedNumber === randNum) {
      setScore((prev) => prev + randNum);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <div className="main-container">
        <div className="top-section">
          <TotalScore score={score} />
          <NumberSelector
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>

        <RollDice currentDice={currentDice} rollDice={rollDice} />
        <div className="button-group">
          <button className="outlined-button" onClick={resetScore}>
            Reset Score
          </button>
          <button
            className="rules-button"
            onClick={() => setShowRules((prev) => !prev)}
          >
            {showRules ? "Hide" : "Show"} Rules
          </button>
        </div>

        {showRules && <Rules />}
      </div>
    </>
  );
};

export default GamePlay;

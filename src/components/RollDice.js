const RollDice = ({ rollDice, currentDice }) => {
  return (
    <>
      <div className="dice-container">
        <div className="dice-image" onClick={rollDice}>
          <img src={`/dice_${currentDice}.png`} alt="dice" />
        </div>

        <p>Click on dice to roll</p>
      </div>
    </>
  );
};

export default RollDice;

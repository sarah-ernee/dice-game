const StartGame = ({ toggle }) => {
  return (
    <>
      <div className="container">
        <div>
          <img src="/dices.png" alt="dices" className="main-image" />
        </div>
        <div className="content">
          <h1>Dice Game</h1>
          <button className="button" onClick={toggle}>
            Play Now
          </button>
        </div>
      </div>
    </>
  );
};

export default StartGame;

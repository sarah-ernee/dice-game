import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [start, setStart] = useState(false);
  const toggleGamePlay = () => {
    setStart((prev) => !prev);
  };

  return <>{start ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>;
}

export default App;

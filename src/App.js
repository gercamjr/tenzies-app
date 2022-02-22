import "./styles/style.css";
import Die from "./components/Die";
import React from "react";

function App() {
  function allNewDice() {
    const length = 10;
    const max = 6;
    const min = 1;
    const dice = [...new Array(length)].map(() =>
      Math.floor(Math.random() * (max - min + 1) + min)
    );

    return dice;
  }

  const [diceNumbers, setDiceNumbers] = React.useState(allNewDice());

  const playingDice = diceNumbers.map((value) => {
    return <Die value={value} />;
  });

  function newRoll() {
    setDiceNumbers(allNewDice());
  }

  return (
    <div className="App">
      <main className="gameboard">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice__wrapper">{playingDice}</div>
        <button className="rollDice" onClick={newRoll}>
          Roll
        </button>
      </main>
    </div>
  );
}

export default App;

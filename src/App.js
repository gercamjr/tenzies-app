import "./styles/style.css"
import Die from "./components/Die"
import React from 'react'

function App() {

  function allNewDice() {
    const length = 10;
    const max = 6;
    const min = 1;
    const dice = [...new Array(length)]
    .map(() => Math.floor(Math.random() *(max - min + 1) + min));

    return dice;
  }

  const [diceNumbers, setDiceNumberes] = React.useState(allNewDice());

  const playingDice = diceNumbers.map((value) => {
    return <Die value={value} />
  })

  return (
    <div className="App">
      <main className="gameboard">
        <div className="dice__wrapper">
          {playingDice}
        </div>
      </main>
    </div>
  );
}

export default App;

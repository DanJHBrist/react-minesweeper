import './App.css';
import Minesweeper from "./Components/Minesweeper";
import "./Components/Game.css";
import Header from './Components/Header';
import Rules from './Components/Rules'

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <Header/>
      <Rules />
      <button class="restart" onClick={refreshPage}>Start New Game</button>
      <Minesweeper
        onWin={() => alert("GAME WON")}
        onLose={() => alert("GAME LOST")}
        bombChance={0.15} // 15% chance that a field will contain a bomb
        width={10} // amount of fields horizontally
        height={10} // amount of fields vertically
      />
    </div>
  );
}

export default App;

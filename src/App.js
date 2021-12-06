import './App.css';
import DeckBuilder from './DeckBuilder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>  
          PLAY CARD DRAW
        </h3>
      </header>
      <div className="App-body">
       <DeckBuilder/>
      </div>
    </div>
  );
}

export default App;

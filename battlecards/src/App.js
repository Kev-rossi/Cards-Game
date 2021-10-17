import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          welcome to battlecards 
        </p>
        <a
          className="App-link"
          href="https://www.sitedrole.com/images-droles-divers/a-table/"
          target="_blank"
          rel="noopener noreferrer"
        >
        start game
        </a>
      </header>
    </div>
  );
}

export default App;

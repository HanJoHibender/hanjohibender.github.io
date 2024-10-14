import logo from './result.svg';
import './App.css';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <a href="index.html">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hibender
        </p>

        </a>

      </header>
    </div>
  );
}

export default App;

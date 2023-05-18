import logo from './logo.svg';
import './App.css';
import cn from 'classnames';
import { useState } from 'react';

function App() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setIsPaused((s) => !s)}>{isPaused ? 'Play' : 'Stop'}</button>
        <img src={logo} className={cn('App-logo', { Paused: isPaused })} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
// import { Icon } from '@iconify/react';
import Game from './components/Game/Game.component';

function App() {
  return (
    <div className="App">
      <h1>
        <b id="b-1">Tic</b>-<b id="b-2">Tac</b>-<b id="b-3">Toe</b>
      </h1>
      <Game />
      <footer>
        <p>
          Desarrollado por{' '}
          <a href="http://github.com/GusEngers" target="_blank" rel="noopener noreferrer">
            @GusEngers
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

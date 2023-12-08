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
      {/* <Icon icon={'fa6-solid:o'} width={'100'} />
      <Icon icon={'fa6-solid:x'} width={'200'} /> */}
    </div>
  );
}

export default App;

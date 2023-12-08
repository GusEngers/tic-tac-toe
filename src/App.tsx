import React from 'react';
import './App.css';
import { Icon } from '@iconify/react';

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <Icon icon={'fa6-solid:o'} width={'100'} />
      <Icon icon={'fa6-solid:x'} width={'200'} />
    </div>
  );
}

export default App;

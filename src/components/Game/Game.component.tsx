import { useState } from 'react';
import style from './Game.module.css';
import Board from '../Board/Board.component';

export default function Game() {
  const [info, setInfo] = useState<string>('Jugador X');

  const handleClick = () => {
    let data = info === 'Jugador X' ? 'Jugador O' : 'Jugador X';
    setInfo(data);
  };

  return (
    <section className={style.container}>
      <h2>{info}</h2>
      <button type="button" onClick={handleClick}>
        Cambiar jugador
      </button>
      <Board />
    </section>
  );
}

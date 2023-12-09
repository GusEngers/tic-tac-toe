// Utils
import { useEffect, useState } from 'react';
import { verifyWinner } from '../../utils/verifyWinner';
import { EndGame } from '../../utils/Types';
import style from './Game.module.css';

// Components
import Board from '../Board/Board.component';
import Info from '../Info/Info.component';

export default function Game() {
  const [player, setPlayer] = useState<string>('X');
  const [count, setCount] = useState<number>(0);
  const [items, setItems] = useState<(string | null)[]>(new Array(9).fill(null));
  const [endGame, setEndGame] = useState<EndGame>({ player, status: false, winner: false });

  useEffect(() => {
    let after = player === 'X' ? 'O' : 'X';
    if (count > 3 && count <= 9) {
      verifyWinner({ player: after, setEndGame, items, count });
    }
  }, [count, items, player]);

  const restart = () => {
    setPlayer('X');
    setCount(0);
    setItems(new Array(9).fill(null));
    setEndGame({ player, status: false, winner: false });
  };

  return (
    <section className={style.container}>
      <Info key="IC-1" player={player} endGame={endGame} restart={restart} />
      <Board
        key="BC-1"
        player={player}
        setPlayer={setPlayer}
        items={items}
        setItems={setItems}
        count={count}
        setCount={setCount}
        endGame={endGame}
      />
    </section>
  );
}

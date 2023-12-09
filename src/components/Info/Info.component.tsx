// Utils
import { InfoParams } from '../../utils/ParamsComponents';
import style from './Info.module.css';

// Components
import { Icon } from '@iconify/react';

export default function Info({ player, endGame, restart }: InfoParams) {
  // Juego terminado con un ganador
  if (endGame.status && endGame.winner) {
    return (
      <div className={style.container}>
        <h2 className={style.title}>
          Partida terminada. ¡Ganó <b className={style[endGame.player]}>{endGame.player}</b>!
        </h2>
        <button type="reset" onClick={restart} className={style.button}>
          <Icon icon="fa6-solid:arrow-rotate-left" />
        </button>
      </div>
    );
  }

  // Juego terminado en empate
  if (endGame.status && !endGame.winner) {
    return (
      <div className={style.container}>
        <h2 className={style.title}>Partida terminada. ¡Empate!</h2>
        <button type="reset" onClick={restart} className={style.button}>
          <Icon icon="fa6-solid:arrow-rotate-left" />
        </button>
      </div>
    );
  }

  // Juego en curso
  return (
    <div className={style.container}>
      <h2 className={style.title}>
        Es el turno de <b className={style[player]}>{player}</b>
      </h2>
    </div>
  );
}

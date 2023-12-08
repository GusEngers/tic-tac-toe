// Utils
import { InfoParams } from '../../utils/ParamsComponents';

// Components
import { Icon } from '@iconify/react';

export default function Info({ player, endGame }: InfoParams) {
  // Juego terminado con un ganador
  if (endGame.status && endGame.winner) {
    return (
      <>
        <h2>Partida terminada. ¡Ganó {endGame.player}!</h2>
        <button type="reset">
          <Icon icon="fa6-solid:arrow-rotate-left" />
        </button>
      </>
    );
  }

  // Juego terminado en empate
  if (endGame.status && !endGame.winner) {
    return (
      <>
        <h2>Partida terminada. ¡Empate!</h2>
        <button type="reset">
          <Icon icon="fa6-solid:arrow-rotate-left" />
        </button>
      </>
    );
  }

  // Juego en curso
  return (
    <>
      <h2>Es el turno de {player}</h2>
    </>
  );
}

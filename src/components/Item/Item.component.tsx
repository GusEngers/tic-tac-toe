// Utils
import { ITEM_BAN, ITEM_O, ITEM_X } from '../../utils/Constants';
import { ItemParams } from '../../utils/ParamsComponents';
import style from './Item.module.css';

// Components
import { Icon } from '@iconify/react';

export default function Item(props: ItemParams) {
  const handleClick = () => {
    // No modificar las casillas cuando el juego está terminado
    if (props.endGame.status) return;

    if (props.player === 'X' && props.element === null) {
      // Añadir 'X' si la casilla está vacía
      props.changeItems(props.id, 'X');
      props.setCount(props.count + 1);
      props.setPlayer('O');
    } else if (props.player === 'O' && props.element === null) {
      // Añadir 'O' si la casilla está vacía
      props.changeItems(props.id, 'O');
      props.setCount(props.count + 1);
      props.setPlayer('X');
    }
  };

  return (
    <div
      id={style[props.id.toString()]}
      className={
        props.element === null && !props.endGame.status ? style.container : style.container_off
      }
      onClick={handleClick}
      aria-disabled={props.element !== null}
    >
      <Icon
        icon={props.element === null ? ITEM_BAN : props.element === 'X' ? ITEM_X : ITEM_O}
        className={
          style[
            props.element === null
              ? ITEM_BAN.replace(':', '')
              : props.element === 'X'
              ? ITEM_X.replace(':', '')
              : ITEM_O.replace(':', '')
          ]
        }
      />
    </div>
  );
}

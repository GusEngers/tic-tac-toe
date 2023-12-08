// Utils
import { useState } from 'react';
import { ITEM_BAN, ITEM_O, ITEM_X } from '../../utils/Constants';
import { ItemParams } from '../../utils/ParamsComponents';
import style from './Item.module.css';

// Components
import { Icon } from '@iconify/react';

export default function Item(props: ItemParams) {
  const [element, setElement] = useState(ITEM_BAN);
  let className: string = element.replace(':', '');

  const handleClick = () => {
    // No modificar las casillas cuando el juego está terminado
    if (props.endGame.status) return;
    
    if (props.player === 'X' && element === ITEM_BAN) {
      // Añadir 'X' si la casilla está vacía
      props.changeItems(props.id, 'X');
      props.setCount(props.count + 1);
      setElement(ITEM_X);
      props.setPlayer('O');
    } else if (props.player === 'O' && element === ITEM_BAN) {
      // Añadir 'O' si la casilla está vacía
      props.changeItems(props.id, 'O');
      props.setCount(props.count + 1);
      setElement(ITEM_O);
      props.setPlayer('X');
    }
  };

  return (
    <div id={props.id.toString()} className={style.container} onClick={handleClick}>
      <Icon icon={element} className={style[className]} />
    </div>
  );
}

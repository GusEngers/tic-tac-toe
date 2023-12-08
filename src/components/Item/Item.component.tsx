import { Icon } from '@iconify/react';
import style from './Item.module.css';
import { ITEM_BAN, ITEM_O, ITEM_X } from '../../utils/Constants';
import { useState } from 'react';

export default function Item({
  id,
  player,
  setPlayer,
}: {
  id: number;
  player: string;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [element, setElement] = useState(ITEM_BAN);
  let className: string = element.replace(':', '');

  const handleClick = () => {
    if (player === 'X' && element === ITEM_BAN) {
      setElement(ITEM_X);
      setPlayer('O');
    } else if (player === 'O' && element === ITEM_BAN) {
      setElement(ITEM_O);
      setPlayer('X');
    }
  };

  return (
    <div id={id.toString()} className={style.container} onClick={handleClick}>
      <Icon icon={element} className={style[className]} />
    </div>
  );
}

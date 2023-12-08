import { useState } from 'react';
import { ITEM_BAN, ITEM_O, ITEM_X } from '../../utils/Constants';
import Item from '../Item/Item.component';
import style from './Board.module.css';

const items = [
  { id: 1, element: ITEM_BAN },
  { id: 2, element: ITEM_BAN },
  { id: 3, element: ITEM_BAN },
  { id: 4, element: ITEM_BAN },
  { id: 5, element: ITEM_BAN },
  { id: 6, element: ITEM_BAN },
  { id: 7, element: ITEM_BAN },
  { id: 8, element: ITEM_BAN },
  { id: 9, element: ITEM_BAN },
];

export default function Board() {
  const [player, setPlayer] = useState<string>('X');

  return (
    <div className={style.container}>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          player={player}
          setPlayer={setPlayer}
        />
      ))}
    </div>
  );
}

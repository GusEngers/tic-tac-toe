// Utils
import { BoardParams } from '../../utils/ParamsComponents';
import style from './Board.module.css';

// Components
import Item from '../Item/Item.component';

export default function Board(props: BoardParams) {
  const changeItems = (index: number, value: string) => {
    let newItems = [...props.items];
    newItems[index] = value;
    props.setItems(newItems);
  };

  return (
    <div className={style.container}>
      {props.items.map((_, index) => (
        <Item
          key={'IC-' + index}
          id={index}
          player={props.player}
          setPlayer={props.setPlayer}
          changeItems={changeItems}
          count={props.count}
          setCount={props.setCount}
          endGame={props.endGame}
        />
      ))}
    </div>
  );
}

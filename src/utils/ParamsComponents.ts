import { EndGame } from './Types';

export interface InfoParams {
  player: string;
  endGame: EndGame;
  restart: () => void;
}

export interface BoardParams {
  player: string;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
  items: (string | null)[];
  setItems: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  endGame: EndGame;
}

export interface ItemParams {
  id: number;
  player: string;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
  changeItems: (index: number, value: string) => void;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  endGame: EndGame;
}

export interface VerifyWinner {
  player: string;
  setEndGame: React.Dispatch<React.SetStateAction<EndGame>>;
  items: (string | null)[];
  count: number;
}

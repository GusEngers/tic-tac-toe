import { VerifyWinner } from './ParamsComponents';

export function verifyWinner(arg: VerifyWinner) {
  const idx = (a: number, b: number, c: number) =>
    arg.items[a] === arg.player && arg.items[b] === arg.player && arg.items[c] === arg.player;

  if (idx(0, 1, 2)) {
    arg.setEndGame({ player: arg.player, status: true, winner: true });
    return;
  }
  if (idx(3, 4, 5)) {
    arg.setEndGame({ player: arg.player, status: true, winner: true });
    return;
  }
  if (idx(6, 7, 8)) {
    arg.setEndGame({ player: arg.player, status: true, winner: true });
    return;
  }
  if (idx(0, 4, 8)) {
    arg.setEndGame({ player: arg.player, status: true, winner: true });
    return;
  }
  if (idx(2, 4, 6)) {
    arg.setEndGame({ player: arg.player, status: true, winner: true });
    return;
  }
  if (idx(0, 3, 6)) {
    arg.setEndGame({ player: arg.player, status: true, winner: true });
    return;
  }
  if (idx(1, 4, 7)) {
    arg.setEndGame({ player: arg.player, status: true, winner: true });
    return;
  }
  if (idx(2, 5, 8)) {
    arg.setEndGame({ player: arg.player, status: true, winner: true });
    return;
  }
  if (arg.count === 9) {
    arg.setEndGame({ player: arg.player, status: true, winner: false });
    return;
  }
  arg.setEndGame({ player: arg.player, status: false, winner: false });
  return;
}

import { Cell } from "./types/Cell";
import { IGameField } from "./GameField";

export interface IGameView {
  updateGameField(field: Cell[][]): void;
  updateGameState(state: {
    width?: number;
    height?: number;
    isRunning?: boolean;
  });
  onCellClick(cb: (x: number, y: number) => void);
  onGameStateChange(cb: (newState: boolean) => void);
  onFieldSizeChange(cb: (width: number, height: number) => void);
}

// export class GameView implements IGameView {
//   GameField: IGameField;

//   field: HTMLElement;

//   constructor (el: HTMLElement) {
//     this.field = el;
    
//   }

//   return;

//   updateGameField(field: Cell[][]);

//   updateGameState(state: {
//     width?: number;
//     height?: number;
//     isRunning?: boolean;
//   });

//   onCellClick(cb: (x: number, y: number) => void);

//   onGameStateChange(cb: (newState: boolean) => void);

//   onFieldSizeChange(cb: (width: number, height: number) => void);

// }
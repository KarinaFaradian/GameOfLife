import { Cell } from "./types/Cell";

export interface IGameField {
  getState(): Cell[][];
  toggleCellState(x: number, y: number): void;
  nextGeneration(): boolean;
  setSize(width: number, height: number): void;
  clearField(): void;
}

export class GameField implements IGameField {
  field: Cell[][] = [];

  constructor(width: number = 0, height: number = 1) {
    const field = [];
    for (let row = 0; row < height; row++) {
      field[row] = [];
      for (let col = 0; col < width; col++) {
        field[row][col] = 0;
      }
      this.field = field;
    }
  }

  isInsideField(x: number, y: number) {
    if (x < 0 || y < 0) {
      return false;
    }
    if (y >= this.field.length || x >= this.field[0].length) {
      return false;
    }
    return true;
  }

  getAliveCellsCount(x: number, y: number) {
    let count = 0;
    for (let row = y - 1; row <= y + 1; row++) {
        for (let col = x - 1; col <= x + 1; col++) {
          if (!this.isInsideField(col, row) || (row === y && col === x)) {
            continue;
          }
          if (this.field[row][col] === 1) {
            count += 1;
          }
        }
      }
    return count;
  }

  nextGeneration():boolean {
    const newField = [];
    let isGameFinished = true;
    for (let row = 0; row < this.field.length; row++) {
        newField.push(new Array(this.field[0].length).fill(0));
        for (let col = 0; col < this.field[0].length; col++) {
            const neighbors = this.getAliveCellsCount(col, row);
            if (this.field[row][col] === 0) {
                newField[row][col] = neighbors === 3 ? 1 : 0;
            } else {
                newField[row][col] = neighbors === 2 || neighbors === 3 ? 1 : 0;
            }
    
            if (isGameFinished && newField[row][col] !== this.field[row][col]) {
                isGameFinished = false;
            }
        }
    }
    this.field = newField;
    return !isGameFinished;
  }

  getState() {
    return this.field;
  }

  toggleCellState(x: number, y: number) {
    if (this.field[y][x] === 1) {
      this.field[y][x] = 0;
    } else {
      this.field[y][x] = 1;
    }
  }

  setSize(width: number, height: number) {
    const newField = [];

    for (let row = 0; row < height; row++) {
      newField.push([]);
      for (let col = 0; col < width; col++) {
        if (
          this.field[row] !== undefined &&
          this.field[row][col] !== undefined
        ) {
          newField[row][col] = this.field[row][col];
        } else {
          newField[row][col] = 0;
        }
      }
    }
    this.field = newField;
  }

  clearField() {
    for (let row = 0; row < this.field.length; row++) {
      for (let col = 0; col < this.field[row].length; col++) {
        this.field[row][col] = 0;
      }
    }
  }
}

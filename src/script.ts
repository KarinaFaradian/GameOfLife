import { Game } from "./scripts/Game";
import { GameField } from "./scripts/GameField";
import { GameView } from "./scripts/GameView";
import "./styles.css";
import "./main.html";

const el = document.getElementById("game__app") as HTMLElement;

const gameView = new GameView(el);
const gameField = new GameField(5, 5);
new Game(gameField, gameView, 1000);

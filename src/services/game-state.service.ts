import { PlayerColor } from "../constants";

class GameStateService {
  public declareVictory(playerColor: PlayerColor) {
    alert(`${playerColor} player won!`);
  }
}

export const gameStateService = new GameStateService();
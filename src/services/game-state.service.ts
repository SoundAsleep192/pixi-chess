import { PlayerColor } from "constants";
import { injectable, singleton } from "tsyringe";

@injectable()
@singleton()
export class GameStateService {
  public declareVictory(playerColor: PlayerColor) {
    alert(`${playerColor} player won!`);
  }
}

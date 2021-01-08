import { PieceType, PlayerColor, PositionX, PositionY } from "constants";
import { gameStateService } from "../services/game-state.service";
import { renderService } from "../services/render.service";
import { v4 } from 'uuid';

/** Represents a piece on the board */
export class Piece {
  /** Unique id of the piece */
  public readonly id: string;

  /** Position of the piece on the board */
  public get position(): [PositionX, PositionY] {
    return [this._x, this._y];
  }

  /** Life state of the piece */
  public get alive(): boolean {
    return this._alive;
  }

  private _x: PositionX;

  private _y: PositionY;

  private _alive: boolean;

  private gameStateService = gameStateService;
  private renderService = renderService;

  constructor(
    /** Type of the piece */
    public readonly type: PieceType,
    /** Color of the piece */
    public readonly color: PlayerColor,
    public readonly x: PositionX,
    public readonly y: PositionY
  ) {
    this.id = v4();
    this._alive = true;
    this._x = x;
    this._y = y;
    this.renderService.addPiece(this);
  }

  /** Moves the piece to the specified position on the board */
  public move(x: PositionX, y: PositionY): void {
    this._x = x;
    this._y = y;
  }

  /** States that the piece has been killed */
  public die(): void {
    this._alive = false;
    if (this.type === PieceType.KING) {
      this.gameStateService.declareVictory(this.color === PlayerColor.BLACK ? PlayerColor.WHITE : PlayerColor.BLACK);
    }
  }

  /** States that this pieces has killed another piece */
  private kill(piece: Piece): void {
    piece.die();
  }
}
import { PieceType, PlayerColor } from "constants";

/** @returns texture name of a given piece */
export function getPieceTexture(pieceType: PieceType, pieceColor: PlayerColor): string {
  return `${pieceType.toLowerCase()}_${pieceColor.toLowerCase()}.svg`;
}

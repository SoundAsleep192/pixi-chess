/** Size of a square of the board in pixels */
export const SQUARE_SIZE_PX = 64;
/** Size of the board in squares */
export const BOARD_SIZE_SQUARES = 8;
/** Width of the window where the game is rendered */
export const APP_FRAME_WIDTH = SQUARE_SIZE_PX * BOARD_SIZE_SQUARES;
/** Height of the window where the game is rendered */
export const APP_FRAME_HEIGHT = SQUARE_SIZE_PX * BOARD_SIZE_SQUARES;

/** Possible positions on the X-axis of the board */
export type PositionX = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

/** An array of all PositionX values in their alphabetical order */
export const PositionsXOrdered: PositionX[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

/** Possible positions on the Y-axis of the board */
export type PositionY = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/** Types of pieces */
export enum PieceType {
  PAWN = 'PAWN',
  KNIGHT = 'KNIGHT',
  BISHOP = 'BISHOP',
  ROOK = 'ROOK',
  QUEEN = 'QUEEN',
  KING = 'KING'
}

/** Color of pieces of a specific player */
export enum PlayerColor {
  WHITE = 'WHITE',
  BLACK = 'BLACK'
}

const { KING, KNIGHT, BISHOP, PAWN, QUEEN, ROOK } = PieceType;
/** This is how the pieces are placed on the board at the start of a game (one side) */
export const initialPiecesSetup: PieceType[][] = [
  [ROOK, KNIGHT, BISHOP, QUEEN, KING, BISHOP, KNIGHT, ROOK],
  Array(8).fill(PAWN)
]
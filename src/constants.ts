const SQUARE_SIZE_PX = 64;
const BOARD_SIZE_SUQARES = 8;
export const APP_FRAME_WIDTH = SQUARE_SIZE_PX * BOARD_SIZE_SUQARES;
export const APP_FRAME_HEIGHT = SQUARE_SIZE_PX * BOARD_SIZE_SUQARES;

export type PositionX = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export type PositionY = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export enum PieceType {
  PAWN,
  KNIGHT,
  BISHOP,
  ROOK,
  QUEEN,
  KING
}

export enum PlayerColor {
  WHITE = 'WHITE',
  BLACK = 'BLACK'
}

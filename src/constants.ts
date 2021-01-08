export const SQUARE_SIZE_PX = 64;
export const BOARD_SIZE_SQUARES = 8;
export const APP_FRAME_WIDTH = SQUARE_SIZE_PX * BOARD_SIZE_SQUARES;
export const APP_FRAME_HEIGHT = SQUARE_SIZE_PX * BOARD_SIZE_SQUARES;

export type PositionX = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export type PositionY = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export enum PieceType {
  PAWN = 'PAWN',
  KNIGHT = 'KNIGHT',
  BISHOP = 'BISHOP',
  ROOK = 'ROOK',
  QUEEN = 'QUEEN',
  KING = 'KING'
}

export enum PlayerColor {
  WHITE = 'WHITE',
  BLACK = 'BLACK'
}

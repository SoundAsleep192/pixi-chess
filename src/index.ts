import { BOARD_SIZE_SQUARES, initialPiecesSetup, PlayerColor, PositionsXOrdered, PositionY } from "./constants";
import { Piece } from "./entities/piece";
import { renderService } from "./services/render.service";

// Initial pieces setup for black player
initialPiecesSetup.forEach((piecesRow, rowIndex) => {
  PositionsXOrdered.forEach((positionX, colIndex) => {
    new Piece(piecesRow[colIndex], PlayerColor.BLACK, positionX, <PositionY>(rowIndex + 1));
  })
});

// Initial pieces setup for white player
initialPiecesSetup.forEach((piecesRow, rowIndex) => {
  PositionsXOrdered.forEach((positionX, colIndex) => {
    new Piece(piecesRow[colIndex], PlayerColor.WHITE, positionX, <PositionY>(BOARD_SIZE_SQUARES - rowIndex));
  })
});

renderService.render();

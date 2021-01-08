import { PieceType, PlayerColor } from "./constants";
import { Piece } from "./entities/piece";
import { renderService } from "./services/render.service";

const knight = new Piece(PieceType.KNIGHT, PlayerColor.BLACK, 'A', 1);

renderService.render();

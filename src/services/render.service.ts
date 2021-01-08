import { Application, Loader, Sprite, Spritesheet, Graphics } from 'pixi.js';
import { APP_FRAME_HEIGHT, APP_FRAME_WIDTH, BOARD_SIZE_SQUARES, SQUARE_SIZE_PX } from '../constants';
import chessSpritesJSON from '../assets/chess_sprites.json';
import chessSpritesPNG from '../assets/chess_sprites.png';
import { getPieceTexture } from '../utils/getPieceTexture';
import { Piece } from '../entities/piece';
import { mapPositionToPx } from '../utils/mapPositionToPx';

/** A service responsible for drawing all the visuals */
class RenderService {

  private app: Application;

  private loader: Loader;

  private graphics: Graphics;

  private PiecesToDraw: Piece[] = [];

  constructor() {
    this.app = new Application({
      width: APP_FRAME_WIDTH,
      height: APP_FRAME_HEIGHT,
      antialias: true,
      transparent: false,
      resolution: 1
    });

    this.loader = Loader.shared;

    this.graphics = new Graphics();
  }

  public render(): void {
    this.app.renderer.backgroundColor = 0xFFCE9E;

    this.loader
      .add(chessSpritesPNG)
      .load(() => {
        const sheet = new Spritesheet(
          Loader.shared.resources[chessSpritesPNG].texture.baseTexture,
          chessSpritesJSON
        );

        sheet.parse((textures) => {
          // draw squares on the board
          this.graphics.beginFill(0xAD5527);
          for (let rowIndex = 0; rowIndex < BOARD_SIZE_SQUARES; rowIndex += 1) {
            for (let colIndex = 0; colIndex < BOARD_SIZE_SQUARES; colIndex += 1) {
              if (rowIndex % 2 ^ colIndex % 2) {
                const square = this.graphics.drawRect(
                  rowIndex * SQUARE_SIZE_PX,
                  colIndex * SQUARE_SIZE_PX,
                  SQUARE_SIZE_PX,
                  SQUARE_SIZE_PX);
                this.app.stage.addChild(square);
              }
            }
          }

          // draw all pieces on the board
          this.PiecesToDraw.forEach(piece => {
            const pieceSprite = new Sprite(textures[getPieceTexture(piece.type, piece.color)]);
            pieceSprite.height = SQUARE_SIZE_PX;
            pieceSprite.width = SQUARE_SIZE_PX;
            pieceSprite.position.set(...mapPositionToPx(...piece.position));
            this.app.stage.addChild(pieceSprite);
          });
        });
      });

    document.body.appendChild(this.app.view);
  }

  public addPiece(piece: Piece): void {
    this.PiecesToDraw.push(piece);
  }
}

export const renderService = new RenderService();
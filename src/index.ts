import { Application, Loader, Sprite, Spritesheet } from 'pixi.js';
import { APP_FRAME_HEIGHT, APP_FRAME_WIDTH } from './constants';
import chessSpritesJSON from './assets/chess_sprites.json';
import chessSpritesPNG from './assets/chess_sprites.png';

const app = new Application({
  width: APP_FRAME_WIDTH,
  height: APP_FRAME_HEIGHT,
  antialias: true,
  transparent: false,
  resolution: 1
});
app.renderer.backgroundColor = 0xFFCE9E;

document.body.appendChild(app.view);

Loader.shared
  .add(chessSpritesPNG)
  .load(() => {
    const sheet = new Spritesheet(
      Loader.shared.resources[chessSpritesPNG].texture.baseTexture,
      chessSpritesJSON
    );

    sheet.parse((textures) => {
      const knight = new Sprite(textures['knight_black.svg']);
      knight.position.set(96, 96);
      app.stage.addChild(knight);
    });
  });

document.body.appendChild(app.view);

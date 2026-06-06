import Phaser from "phaser";

import PreloadScene from "./src/scenes/PreloadScene";
import MainScene from "./src/scenes/MainScene";

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: "game-container",

  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },

  scene: [
    PreloadScene,
    MainScene
  ]
};

new Phaser.Game(config);
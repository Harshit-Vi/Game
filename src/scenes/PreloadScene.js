import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.image("player", "assets/images/player.png");
    this.load.image("ground", "assets/images/ground.png");
  }

  create() {
    this.scene.start("MainScene");
  }
}
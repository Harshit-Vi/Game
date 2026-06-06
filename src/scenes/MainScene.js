import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  create() {
    this.add.image(640, 360, "ground");

    this.player = this.physics.add.sprite(640, 360, "player");

    this.player.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.startFollow(this.player);

    this.cameras.main.setLerp(0.08, 0.08);
  }

  update() {
    const speed = 220;

    this.player.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-speed);
    }

    if (this.cursors.right.isDown) {
      this.player.setVelocityX(speed);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-speed);
    }

    if (this.cursors.down.isDown) {
      this.player.setVelocityY(speed);
    }
  }
}

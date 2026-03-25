import Player from "../objects/Player.js";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    create() {
        // Background
        this.add.image(400, 300, 'background');

        // Player
        this.player = new Player(this, 400, 300);

        // Controls
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.player.update(this.cursors);
    }
}

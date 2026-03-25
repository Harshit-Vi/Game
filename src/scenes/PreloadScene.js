export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload() {
        // TEMP placeholders (replace later)
        this.load.image('player', 'assets/images/player.png');
        this.load.image('tree', 'assets/images/tree.png');
        this.load.image('flower', 'assets/images/flower.png');
        this.load.image('background', 'assets/images/background.png');
    }

    create() {
        this.scene.start("MainScene");
    }
}

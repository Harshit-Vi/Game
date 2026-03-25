import PreloadScene from "./src/scenes/PreloadScene.js";
import MainScene from "./src/scenes/MainScene.js";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: [PreloadScene, MainScene]
};

new Phaser.Game(config);

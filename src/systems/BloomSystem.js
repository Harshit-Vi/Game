export default class BloomSystem {
    constructor(scene) {
        this.scene = scene;
        this.active = false;
    }

    trigger(x, y) {
        this.active = true;

        for (let i = 0; i < 50; i++) {
            let flower = this.scene.add.image(
                x + Phaser.Math.Between(-100, 100),
                y + Phaser.Math.Between(-100, 100),
                'flower'
            );

            flower.setScale(0);

            this.scene.tweens.add({
                targets: flower,
                scale: 0.5,
                duration: 500
            });
        }
    }
}

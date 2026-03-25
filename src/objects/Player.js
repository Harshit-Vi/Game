export default class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, 'player');

        this.speed = 200;
    }

    update(cursors) {
        this.sprite.setVelocity(0);

        if (cursors.left.isDown) {
            this.sprite.setVelocityX(-this.speed);
        }
        if (cursors.right.isDown) {
            this.sprite.setVelocityX(this.speed);
        }
        if (cursors.up.isDown) {
            this.sprite.setVelocityY(-this.speed);
        }
        if (cursors.down.isDown) {
            this.sprite.setVelocityY(this.speed);
        }
    }
}

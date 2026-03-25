export default class DialogueSystem {
    constructor(scene) {
        this.scene = scene;
    }

    show(text) {
        let txt = this.scene.add.text(200, 500, text, {
            fontSize: '20px',
            fill: '#ffffff'
        });

        this.scene.time.delayedCall(2000, () => {
            txt.destroy();
        });
    }
}

class Background {
    constructor() {
        this.document = document;
        this.setRandomBackground();
    }

    setRandomBackground() {
        let hex = this.getRandomHex();
        const bodyElement = this.document.querySelector('body');
        bodyElement.style.background = `#${hex}`;

        if (hex == "FFFFFF") {
            this.document.querySelector('h1').style.color = this.getRandomHex();
        }

    }

    getRandomHex() {
        return (0x1000000 + (Math.random()) * 0xffffff)
            .toString(16)
            .substr(1, 6);
    }
}

(() => {
    new Background();
})();

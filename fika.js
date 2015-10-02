class Background {
    constructor() {
        this.document = document;
        this.setRandomBackground();
        this.displayIfFriday();
    }

    setRandomBackground() {
        let hex = this.getRandomHex();
        const bodyElement = this.document.querySelector('body');
        bodyElement.style.background = `#${hex}`;

        if (hex == "FFFFFF") {
            this.document.querySelector('h1').style.color = this.getRandomHex();
        }

    }

    displayIfFriday() {
        const flex = this.document.querySelector('.flex');
        const text = this.document.createElement('h2');
        text.textContent = this.isFriday() ? 'Ja' : 'Nej';
        flex.appendChild(text);
    }

    isFriday() {
        return new Date().getDay() === 5;
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
